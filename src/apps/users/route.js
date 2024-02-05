import express from "express";
import tryCatch from "../../middlewares/tryCatch.js";
import {
  addAddress,
  getAllAddress,
  getUser,
  registerUser,
} from "./controller.js";
import { jwtAuth } from "../../middlewares/auth.js";

export const userRouter = express.Router();

userRouter
  .route("/user")
  .post(tryCatch(registerUser))
  .get(jwtAuth, tryCatch(getUser));

userRouter
  .route("/address")
  .post(jwtAuth, tryCatch(addAddress))
  .get(jwtAuth, tryCatch(getAllAddress));
