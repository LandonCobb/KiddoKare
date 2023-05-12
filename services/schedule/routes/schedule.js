import * as nsr from "node-server-router";
import { ScheduleModel } from "../models/schedule.js";

export default [
  {
    url: "schedule/:_id",
    action: nsr.HTTPAction.GET,
    handlers: [
      async (req, res) => {
        try {
          const schedule = await ScheduleModel.findById(req.params._id).lean();
          return res.status(200).json(schedule);
        } catch  {
          return res.status(404).json(null)
        }
      },
    ],
  },
  {
    url: "schedule",
    action: nsr.HTTPAction.POST,
    handlers: [
      async (req, res) => {
        try {
          const schedule = await ScheduleModel.create({});
          return res.status(201).json(schedule);
        } catch {
          return res.sendStatus(400)
        }
      },
    ],
  },
  {
    url: "schedule/:_id/:blockId",
    action: nsr.HTTPAction.PUT,
    handlers: [
      async (req, res) => {
        try {
          const schedule = await ScheduleModel.findByIdAndUpdate(
            { _id: req.params._id },
            { $push: { blocks: req.params.blockId } },
            { runValidators: true, new: true, upsert: false }
          );
          return res.status(201).json(schedule);
        } catch {
          return res.sendStatus(400)
        }
      },
    ],
  },
  {
    url: "schedule/:_id/:blockId",
    action: nsr.HTTPAction.DELETE,
    handlers: [
      async (req, res) => {
        try {
          const schedule = await ScheduleModel.findByIdAndUpdate(
            { _id: req.params._id },
            { $pull: { blocks: req.params.blockId } },
            { runValidators: true, new: true, upsert: false }
          );
          return res.status(201).json(schedule);
        } catch  {
          return res.sendStatus(400)
        }
      },
    ],
  },
  {
    url: "schedule/:_id",
    action: nsr.HTTPAction.DELETE,
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
          return res.sendStatus(400)
        }
      },
    ],
  },
];
