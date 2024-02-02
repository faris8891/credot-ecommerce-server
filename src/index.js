import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import errorHandler from "./middlewares/errorHandler.js";
import logger from "./libs/winstonLogger.js";
import dotenv from "dotenv";
dotenv.config();

export const app = express();
const dbUrl = process.env.DB_URL;

if (!dbUrl) {
    logger.error("DB_URL not defined in environment variables.");
  process.exit(1);
}

mongoose
  .connect(dbUrl)
  .then(() => {
    logger.info("Connected to MongoDB!");
  })
  .catch(() => {
    console.error("Failed to connect!");
  });

app.use(cors());
app.use(express.json());

// write route here

app.use(errorHandler);
