import { productsModel } from "../model/productModel.js";

export async function createProductsDB(data) {
  const newProduct = new productsModel(data);
  newProduct.save();
  return newProduct;
}

export async function getAllProductsDB(filters) {
  const products = await productsModel.find(filters);
  return products;
}

export async function getProductsDB(filters) {
  const products = await productsModel.findOne(filters);
  return products;
}
