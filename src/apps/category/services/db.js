import { categoryModel } from "../model/categoryModel.js";

export async function createCategoryDB(data) {
  const category = new categoryModel(data);
  category.save();
  return category;
}

export async function getAllCategoriesDB(filters) {
  const allCategories = await categoryModel.find(filters || {});
  return allCategories;
}
