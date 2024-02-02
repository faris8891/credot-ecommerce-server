import express from "express";
import tryCatch from "../../middlewares/tryCatch.js";
import { addProducts, getAllProducts, getProduct } from "./controller.js";

export const productsRouter = express.Router();

productsRouter
  .route("/products")
  .post(tryCatch(addProducts))
    .get(tryCatch(getAllProducts));
  
productsRouter
  .route("/products/:productId")
  .get(tryCatch(getProduct));
