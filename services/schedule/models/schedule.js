import mongoose from "mongoose";

const {Schema, model} = mongoose;

const scheduleSchema = new Schema({
    blocks: {
        type: [{}],
        required: [true, "schedule list is required"],
        default: []
    }
}, {timestamps: true})

export const ScheduleModel = model("SCHEDULE", scheduleSchema);