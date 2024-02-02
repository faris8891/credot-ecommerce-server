import { status } from "../../constant/status.js";
import {
  createProductsDB,
  getAllProductsDB,
  getProductsDB,
} from "./services/db.js";

export async function addProducts(req, res) {
  const newProduct = req.body;

  const product = await createProductsDB(newProduct);

  return res.status(201).json({
    status: status.SUCCESS,
    message: "create product successful.",
    data: {
      product: product,
    },
  });
}

export async function getAllProducts(req, res) {
  const filters = { isDeleted: false };
  const products = await getAllProductsDB(filters);

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
