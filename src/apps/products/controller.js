import { status } from "../../constant/status.js";
import { handleUpload } from "../../helpers/fileUploader.js";
import { createProduct } from "./services/common.js";
import {
  createProductsDB,
  getAllProductsDB,
  getProductsDB,
} from "./services/db.js";

export async function addProducts(req, res) {
  const userId = req.userId;
  const data = req.body;
  const b64 = Buffer.from(req.files[0].buffer).toString("base64");
  let dataURI = "data:" + req.files[0].mimetype + ";base64," + b64;
  const cloudinaryRes = await handleUpload(dataURI, "Credot/products");

  const createdProduct = await createProduct(
    userId,
    data,
    cloudinaryRes.secure_url
  );
  const product = await createProductsDB(createdProduct);

  return res.status(201).json({
    status: status.SUCCESS,
    message: "create product successful.",
    data: {
      product: product,
    },
  });
}

export async function getAllProducts(req, res) {
  const { limit, category } = req.query;
  const filters = { isDeleted: false };
  category ? (filters.category = category) : null;
  const products = await getAllProductsDB(filters, limit);

  return res.status(200).json({
    status: status.SUCCESS,
    message: "fetch products successful.",
    data: {
      products: products,
    },
  });
}

export async function getProduct(req, res) {
  const filters = { isDeleted: false, _id: req.body.productId || null };
  const products = await getProductsDB(filters);

  return res.status(200).json({
    status: status.SUCCESS,
    message: "fetch products successful.",
    data: {
      products: products,
    },
  });
}
