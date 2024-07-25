import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config()

//Middleware to check databse connection 
export const confirmDBconnection = (req, res, next) => {
  console.log("Checking Middleware");
  next();
}

export const tokenAuthentication = (req, res, next) => {
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