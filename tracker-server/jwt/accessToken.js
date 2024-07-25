import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config()

export const generateAccessToken = (user_info) => {
  return jwt.sign(user_info, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1h'});
}