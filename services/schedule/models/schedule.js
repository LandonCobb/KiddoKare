import mongoose from "mongoose";

const {Schema, model, ObjectId} = mongoose;

const scheduleSchema = new Schema({
    blocks: {
        type: [{ 
            blockId: String,
            startHour: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 0,
            endHour: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 0,
            dayOfWeek: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday",
            dateBooked: Date | null,
            bookedParentId: ObjectId | null,
          }],
        required: [true, "schedule list is required"],
        default: []
    }
}, {timestamps: true})

export const ScheduleModel = model("SCHEDULE", scheduleSchema);