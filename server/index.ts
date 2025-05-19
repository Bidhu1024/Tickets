import express from "express";
import { Express, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import authRoutes from "./src/routes/auth";

mongoose.set("strictQuery", true);
dotenv.config();
const app: Express = express();

const connect = async () => {
  try {
    const mongo = process.env.MONGO_URI;
    if (!mongo) return;
    await mongoose.connect(mongo);
    console.log("connected to mongodb");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongodb disconnected");
});
app.use(cors());
app.use(express.json());
app.use("/api/users", authRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
  next(Error("Endpoint not found"));
});

app.listen(8801, () => {
  console.log("server started at port 8801");
  connect();
  console.log("connected to backend");
});
