import { status } from "../../constant/status.js";
import { createCategoryDB, getAllCategoriesDB } from "./services/db.js";

export async function createCategory(req, res) {
  const category = req.body;
  const newCategory = await createCategoryDB({ ...category });

  return res.status(201).json({
    status: status.SUCCESS,
    message: "create category successful.",
    data: {
      category: newCategory,
    },
  });
}

export async function getAllCategories(req, res) {
  const filters = { isDeleted: false };
  const allCategories = await getAllCategoriesDB(filters);

  return res.status(201).json({
    status: status.SUCCESS,
    message: "create category successful.",
    data: {
      categories: allCategories,
    },
  });
}
