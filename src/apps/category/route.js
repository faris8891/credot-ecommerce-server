import express from "express";
import tryCatch from "../../middlewares/tryCatch.js";
import { createCategory, getAllCategories } from "./controller.js";
import { jwtAuth } from "../../middlewares/auth.js";

export const categoriesRouter = express.Router();

categoriesRouter
  .route("/categories")
  .post(jwtAuth,tryCatch(createCategory))
  .get(tryCatch(getAllCategories));
  