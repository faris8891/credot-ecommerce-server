import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export function comparePassword(enteredPassword, hashedPAssword) {
  return new Promise(function (resolve, reject) {
    bcrypt.compare(enteredPassword, hashedPAssword, function (err, result) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

export function generateAccessToken(userId, jwt_key) {
  const userToken = jwt.sign({ id: userId }, jwt_key);
  return userToken;
}
