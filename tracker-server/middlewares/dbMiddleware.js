import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { queryVerifyToken } from "../models/userModel.js";

dotenv.config()

//Middleware to check databse connection 
export const confirmDBconnection = (req, res, next) => {
  console.log("Checking Middleware");
  next();
}

export const tokenAuthentication = async(req, res, next) => {
  try {
  // Since JWT's are sent through httpOnly cookies
  // Client cannot set them to auth header
  // Have to read token from cookie
  const cookies = req.headers['cookie'];

  if (!cookies || cookies.indexOf('accessToken=') == -1) {
    return res.status(401).json({
      message: "Not authorize"
    })
  }

  const token_index = cookies.indexOf('accessToken=') + 12;
  const split_index = (cookies.indexOf(';', token_index) == -1) ? cookies.length : cookies.indexOf(';', token_index);
  const user_token = cookies.substring(token_index, split_index);

  const decoded = jwt.verify(user_token, process.env.ACCESS_TOKEN_SECRET);
  req.body.username = decoded.username;
  req.body.uid = decoded.user_id; //decode token with user information
  req.body.iat = decoded.iat
  
  //check if token is blacklisted
  const count = await checkInvalidList(req.body.uid, req.body.iat)
  if (count > 0) {
    return res.status(403).json({
      Message: "Invalid Token"
    }) 
  }
  next();
  }
  catch (err) {
    console.error("Authentication Error:", err)
    if (err.name === "TokenExpiredError") {
      return res.status(403).json({
        message: "Session Expired",
      });
    }
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
}

const checkInvalidList = async(uid, iat) => {
  const data = await queryVerifyToken(uid, iat)
  return data
}