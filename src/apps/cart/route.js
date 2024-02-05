import express from "express";
import tryCatch from "../../middlewares/tryCatch.js";
import { jwtAuth } from "../../middlewares/auth.js";
import { addToCart, getCart } from "./controller.js";

export const cartRouter = express.Router();

cartRouter
  .route("/cart")
  .post(jwtAuth, tryCatch(addToCart))
  .get(jwtAuth, tryCatch(getCart));
