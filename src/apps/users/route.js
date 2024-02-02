import express from "express";
import tryCatch from "../../middlewares/tryCatch.js";
import {
  addAddress,
  getAllAddress,
  getUser,
  registerUser,
} from "./controller.js";

export const  userRouter= express.Router();

userRouter.route("/user").post(tryCatch(registerUser)).get(tryCatch(getUser));

userRouter
  .route("/address")
  .post(tryCatch(addAddress))
  .get(tryCatch(getAllAddress));
