import { status } from "../../constant/status.js";
import AppError from "../../middlewares/AppError.js";
import { findUserDB } from "../users/services/db.js";
import { comparePassword, generateAccessToken } from "./services/common.js";

import dotenv from "dotenv";
dotenv.config();

export async function loginUser(req, res) {
  const jwt_key = process.env.JWT_KEY;

  const { email, password } = req.body;

  const filters = {
    email: email,
  };

  const select = {
    email: 1,
    password: 1,
  };

  const user = await findUserDB(filters, select);

  const hashedPassword = user?.password;
  const userId = user?._id;

  const loginStatus = await comparePassword(
    password || "",
    hashedPassword || ""
  );

  if (loginStatus !== true) {
    throw new AppError(404, "Incorrect email or password");
  }
  const accessToken = generateAccessToken(userId, jwt_key);

  return res.status(200).json({
    status: status.SUCCESS,
    message: "user login successful.",
    data: {
      accessToken: accessToken,
    },
  });
}
