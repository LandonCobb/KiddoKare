import mongoose from "mongoose";

const { Schema, model, ObjectId } = mongoose;

const scheduleSchema = new Schema(
  {
    blocks: {
      type: [
        {
          blockId: String,
          startHour: {
            type: Number,
            range: [0, 23],
          },
          endHour: {
            type: Number,
            range: [0, 23],
          },
          dayOfWeek: {
            type: String,
            // prettier-ignore
            enum: [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ],
          },
          dateBooked: {
            type: Date,
            default: null,
          },
          bookedParentId: {
            type: ObjectId,
            default: null,
          },
        },
      ],
      required: [true, "schedule list is required"],
      default: [],
    },
    sitterEmail: {
      type: String,
      required: [true, "sitter's email is required"],
      default: "no sitter email found",
    },
  },
  { timestamps: true }
);

export const ScheduleModel = model("SCHEDULE", scheduleSchema);
