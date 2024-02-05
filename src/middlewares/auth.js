import jwt from "jsonwebtoken";

import dotenv from "dotenv";
import AppError from "./AppError.js";
dotenv.config();

export function jwtAuth(req, res, next) {
  const jwt_key = process.env.JWT_KEY;
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    throw new AppError(401, "Unauthorized ❗");
  }
  const token = authHeader.split(" ")[1];
  jwt.verify(token || "null", jwt_key, async (err, decoded) => {
    if (err) {
      throw new AppError(403, "Invalid token ❌");
    }
    req.userId = decoded?.id;
    next();
  });
}
