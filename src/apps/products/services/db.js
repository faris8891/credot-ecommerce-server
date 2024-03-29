import { productsModel } from "../model/productModel.js";

export async function createProductsDB(data) {
  const newProduct = new productsModel(data);
  newProduct.save();
  return newProduct;
}

export async function getAllProductsDB(filters, limit = 15, skip=0) {
  const products = await productsModel
    .find(filters)
    .populate("category")
    .sort({ createdAt: -1 })
    .limit(limit)
    .skip(skip);
  return products;
}

export async function getProductsDB(filters) {
  const products = await productsModel.findOne(filters);
  return products;
}
