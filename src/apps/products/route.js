import express from "express";
import tryCatch from "../../middlewares/tryCatch.js";
import { addProducts, getAllProducts, getProduct } from "./controller.js";
import { jwtAuth } from "../../middlewares/auth.js";
import { upload } from "../../middlewares/multer.js";

export const productsRouter = express.Router();

productsRouter
  .route("/products")
  .post( upload.array("file"),jwtAuth, tryCatch(addProducts))
  .get(tryCatch(getAllProducts));

productsRouter.route("/products/:productId").get(tryCatch(getProduct));
