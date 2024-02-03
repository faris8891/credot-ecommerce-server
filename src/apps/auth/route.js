import express from "express";
import tryCatch from "../../middlewares/tryCatch.js";
import { loginUser } from "./controller.js";

export const authRouter = express.Router();

authRouter.route("/login").post(tryCatch(loginUser));
