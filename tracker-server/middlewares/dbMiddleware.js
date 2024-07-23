import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config()

//Middleware to check databse connection 
export const confirmDBconnection = (req, res, next) => {
  console.log("Checking Middleware");
  next();
}

export const tokenAuthentication = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(401).json({
      message: "Not authorize"
    })
  }
  const user_token = authHeader.split(' ')[1];
  jwt.verify(user_token, process.env.ACCESS_TOKEN_SECRET, 
    (err, decoded) => {
      if (err) {
        return res.status(403).json({
          Message: "Bad token"
        })
      }
      req.body.uid = decoded.user_id; //decode token with user information
      next();
    }
  );
}