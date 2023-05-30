import * as nsr from "node-server-router";
import { ScheduleModel } from "../models/schedule.js";
import { Kafka } from "kafkajs";
import { v4 as uuid } from "uuid";

const validateNewBooking = (
  newStartHour,
  newEndHour,
  existingBookings,
  startHour,
  endHour
) => {
  for (const booking of existingBookings)
    if (booking.startHour < newEndHour && booking.endHour > newStartHour)
      return false;
  if (newStartHour >= startHour && newEndHour <= endHour) return true;
  return false;
};

const kafka = new Kafka({
  clientId: "email-service",
  brokers: ["broker:9092"],
});
const producer = kafka.producer();



export default [
  {
    url: "schedule/:_id",
    action: nsr.HTTPAction.GET, //GETS A SCHEDULE BY ID
    handlers: [
      async (req, res) => {
        try {
          const schedule = await ScheduleModel.findById(req.params._id).lean();
          return res.status(200).json(schedule);
        } catch {
          return res.status(404).json(null);
        }
      },
    ],
  },
  {
    url: "schedule/parent/:pId",
    action: nsr.HTTPAction.GET, //GETS ALL RESERVED BLOCKS BY PARENT ID
    handlers: [
      async (req, res) => {
        try {
          const parentId = req.params.pId;
          const result = await ScheduleModel.aggregate([
            // {
            //   $match: {
            //     'blocks.bookedParentId': { $ne: null }
            //   }
            // },
            {
              $unwind: '$blocks'
            },
            {
              $match: {
                'blocks.bookedParentId': parentId
              }
            },
            {
              $group: {
                _id: null,
                matchingBlocks: { $push: '$blocks' }
              }
            }
          ]).exec();
      
          const matchingBlocks = result.length > 0 ? result[0].matchingBlocks : [];
          console.log(matchingBlocks);
          return res.status(200).json(matchingBlocks);
        } catch (error) {
          console.error(error);
          return res.status(404).json(null);
        }
      },
    ],
  },
  {
    url: "schedule",
    action: nsr.HTTPAction.POST, //CREATE EMPTY SCHEDULE
    handlers: [
      async (req, res) => {
        try {
          const schedule = await ScheduleModel.create({sitterEmail: req.headers["x-email"]});
          return res.status(201).send(schedule._id.toString());
        } catch {
          return res.sendStatus(500);
        }
      },
    ],
  },
  {
    url: "schedule/defaults/:_id",
    action: nsr.HTTPAction.PUT, //USED TO ADD THE DEFAULT TIME BLOCKS (SITTER ADDS THESE)
    handlers: [
      async (req, res) => {
        try {
          // Only make res.body an array of:
          // {
          //   "startHour": 1,
          //   "endHour": 8,
          //   "dayOfWeek": "Monday"
          // }
          const newBlocks = req.body.map((x) => ({
            ...x,
            blockId: uuid(),
            dateBooked: null,
            bookedParentId: null,
          }));
          const schedule = await ScheduleModel.findByIdAndUpdate(
            { _id: req.params._id },
            { $set: { blocks: newBlocks } },
            { runValidators: true, new: true, upsert: false }
          );
          return res.status(201).json(schedule);
        } catch  (err) {
          console.log(err)
          return res.sendStatus(400);
        }
      },
    ],
  },
  {
    url: "schedule/default/:_id/:blockId",
    action: nsr.HTTPAction.PATCH, //USED TO UPDATE A SPECIFIC DEFAULT TIME BLOCK (SITTER DOES THIS)
    handlers: [
      async (req, res) => {
        try {
          // Only make res.body object like:
          // {
          //   "startHour": 1,
          //   "endHour": 8,
          //   "dayOfWeek": "Monday"
          // }
          const schedule = await ScheduleModel.findById(req.params._id).lean()
          const oldBlock = schedule.blocks.find(x => x.blockId === req.params.blockId)
          if(!oldBlock) return res.status(404).json({message: "couldnt find block to update"})
          const updatedBlock = {
            ...({...oldBlock, _id: oldBlock._id.toString()}),
            ...req.body
          }
          console.log(updatedBlock);
          const updatedBlocks = [...schedule.blocks.filter(x => x.blockId !== req.params.blockId), updatedBlock]
          const newSchedule = await ScheduleModel.findByIdAndUpdate(
            { _id: req.params._id },
            { $set: { blocks: updatedBlocks } },
            { runValidators: true, new: true, upsert: false }
          );
          return res.status(200).json(newSchedule);
        } catch {
          return res.sendStatus(400);
        }
      },
    ],
  },
  {
    url: "schedule/default/:_id",
    action: nsr.HTTPAction.DELETE, //DELETE DEFAULT TIME BLOCK (SITTER DOES THIS)
    handlers: [
      async (req, res) => {
        try {
          const schedule = await ScheduleModel.findByIdAndUpdate(
            { _id: req.params._id },
            { $push: { blocks: newBlock } },
            { runValidators: true, new: true, upsert: false }
          );
          return res.status(201).json(schedule);
        } catch {
          return res.sendStatus(400);
        }
      },
    ],
  },
  {
    url: "schedule/:_id/book", //PARENT BOOK A TIME BLOCK(RESERVES A TIME BLOCK)
    action: nsr.HTTPAction.PATCH,
    handlers: [
      async (req, res) => {
        try {
          const newBlock = { ...req.body, blockId: uuid() };
          if (!newBlock.dateBooked || !newBlock.bookedParentId)
            return res.status(400).json({ message: "Missing data" });
          const schedule = await ScheduleModel.findById({
            _id: req.params._id,
          });
          const blocks = schedule.blocks;
          const blocksInQuestion = blocks.filter(
            (x) =>
              x.dayOfWeek.toUpperCase() === req.body.dayOfWeek.toUpperCase()
          );
          const defualtBlock = blocksInQuestion.find(
            (x) => x.dateBooked === null && x.bookedParentId === null
          );
          if (!defualtBlock)
            return res
              .status(400)
              .json({ message: "Defualt availability does not exist" });
          const scheduledBlocks = blocksInQuestion.filter(
            (x) => x.blockId !== defualtBlock.blockId
          );
          if (!scheduledBlocks.length) {
            if (
              newBlock.startHour >= defualtBlock.startHour &&
              newBlock.endHour <= defualtBlock.endHour
            ) {
              const firstItemOnSchedule = await ScheduleModel.findByIdAndUpdate(
                { _id: req.params._id },
                { $push: { blocks: newBlock } },
                { runValidators: true, new: true, upsert: false }
              );
              //TODO: Send email
              const emailObject = {
                "receiver": schedule.sitterEmail,
                "subject": "Time Reserved",
                "body": `Check your schedule! A new time has been reserved at ${newBlock.startHour} on ${newBlock.dateBooked}`

              }
              await producer.connect();
              await producer.send({
                topic: "email",
                messages: [{ value: JSON.stringify(emailObject) }],
              });
              return res.status(200).json(firstItemOnSchedule);
            } else
              return res
                .status(400)
                .json({ message: "Not a valid time range" });
          } else if (
            validateNewBooking(
              newBlock.startHour,
              newBlock.endHour,
              scheduledBlocks,
              defualtBlock.startHour,
              defualtBlock.endHour
            )
          ) {
            const updatedSchedule = await ScheduleModel.findByIdAndUpdate(
              { _id: req.params._id },
              { $push: { blocks: newBlock } },
              { runValidators: true, new: true, upsert: false }
            );
            // TODO: Send email
            const emailObject = {
              "receiver": schedule.sitterEmail,
              "subject": "Time Reserved",
              "body": `Check your schedule! A new time has been reserved at ${newBlock.startHour} on ${newBlock.dateBooked}`
            }
            await producer.connect();
            await producer.send({
              topic: "email",
              messages: [{ value: JSON.stringify(emailObject) }],
            });
            return res.status(200).json(updatedSchedule);
          }
          return res
            .status(201)
            .json({ message: "No valid case for new booking" });
        } catch (err){
          console.log(err)
          return res.sendStatus(500);
        }
      },
    ],
  },
  {
    url: "schedule/:_id/:blockId", //REMOVES TIME BLOCK
    action: nsr.HTTPAction.DELETE,
    handlers: [
      async (req, res) => {
        try {
          await ScheduleModel.remove({ _id: req.params._id });
          return res.sendStatus(204);
        } catch {
          return res.sendStatus(400);
        }
      },
    ],
  },
  {
    url: "schedule/:_id",
    action: nsr.HTTPAction.DELETE, //REMOVES ALL TIME BLOCKS
    handlers: [
      async (req, res) => {
        try {
          const schedule = await ScheduleModel.findByIdAndUpdate(
            { _id: req.params._id },
            { $set: { blocks: [] } },
            { runValidators: true, new: true, upsert: false }
          );
          return res.status(201).json(schedule);
        } catch {
          return res.sendStatus(400);
        }
      },
    ],
  },
];
