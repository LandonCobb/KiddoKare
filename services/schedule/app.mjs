import express from "express";
import * as nsr from "node-server-router";
import cors from "cors";
import mongoose from "mongoose";
import Eurika from "./eurika_helper.js";
import { ScheduleModel } from "./models/schedule.js";

const connectToDB = () =>
  mongoose.connect("mongodb://mongo:27017", {
    dbName: "kiddokare",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

const { json, urlencoded } = express;
const app = express();
app.set("trust proxy", true);
app.use(urlencoded({ limit: "50mb", extended: true }));
app.use(json({ limit: "50mb", extended: true }));
app.use(cors());
app.options("*", cors());
nsr.RouteFactory.applyRoutesTo(app, { log_configured: true });
connectToDB().catch(connectToDB);
mongoose.connection.on("connected", () => {
  console.log(`[${process.pid}] Connected to MongoDB`);
  ScheduleModel.collection.createIndex({ expires: 1 }, { expireAfterSeconds: 0 });
});
mongoose.connection.on("error", (e) => console.log(`[${process.pid}] ${e}`));
Eurika.registerWithEureka("schedule", 8080);
app.use((req, _, next) => {
  console.log(`[${process.pid}] ${req.method} ${req.url}`);
  next();
});
app.listen(1000, () =>
  console.log(`[${process.pid}] Listening on port ${8080}`)
);
