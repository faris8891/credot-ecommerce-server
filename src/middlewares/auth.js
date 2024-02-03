import jwt from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config();

export function jwtAuth(req, res, next) {
  const jwt_key = process.env.JWT_KEY;
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: "Unauthorized ❗" });
  }
  const token = authHeader.split(" ")[1];
  jwt.verify(token, jwt_key, async (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: "Invalid token ❌" });
    }
    req.userId = decoded?.id;
    next();
  });
}
