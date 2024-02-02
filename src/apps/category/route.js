import express from "express";
import tryCatch from "../../middlewares/tryCatch.js";
import { createCategory, getAllCategories } from "./controller.js";

export const categoriesRouter = express.Router();

categoriesRouter
  .route("/categories")
  .post(tryCatch(createCategory))
  .get(tryCatch(getAllCategories));
