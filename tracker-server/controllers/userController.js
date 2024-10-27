import { queryLogin, queryCreateAccount, queryLogout } from "../models/userModel.js";
import bcrypt from "bcrypt";
import { createHash } from "crypto";
import { generateAccessToken } from "../jwt/accessToken.js";

const saltround = 10;

export const userLogin = async(req, res) => {
  try {
    if (!loginValidation(req.body)) {
      return res.status(400).send({
        status: "Failed",
        message: "Bad request"})
    }
    const data = await queryLogin(req.body.username);
    //data from db is in the first element of array
    if (data.length < 1) {
      return res.status(404).send({
        status: "Failed", 
        message: "Account not found"
      });
    }
    const {user_id, password, username} = data[0];
    bcrypt.compare(req.body.password, password, (err, result) => {
      if (err) {
        return res.status(500).send({
          status: "Failed",
          message: "Internal server error"
        });
      }
      if (!result) {
        return res.status(401).send({
          status: "Failed",
          message: "Incorrect password"
        });
      }
      else {
        const accessToken = generateAccessToken({user_id, username}); //generate access token
        res.cookie("accessToken", accessToken, {httpOnly: true});
        return res.status(200).send( {
          status: "Success",
          message: "Logged in successfully",
          payload: {
            uid: user_id,
            username: username
          }
        });
      }
    })
  }
  catch (e) {
    res.status(500).send({
      status: "Failed", 
      message: `Internal server error: ${e.message}`
    });
  }
}

export const createAccount = async(req, res) => {
  try {
    if (!createValidation(req.body)) {
      return res.status(400).send({
        status: "Failed",
        message: "Bad request"})
    }
    const hash_email = createHash('sha256').update(req.body.email).digest('hex'); 
    const salt = await bcrypt.genSalt(saltround);
    const hash_pw = await bcrypt.hash(req.body.password, salt);
    //insert into db
    const {message, user_id, username} = await queryCreateAccount(hash_email, hash_pw, req.body.username, salt);
      if (user_id == null) {
        return res.status(200).send({
        status: "Success",
        message: message
        });
      }
      else {
        return res.status(201).send({
          status: "Success",
          message: message,
          payload: {
            uid: user_id,
            username: username
          }
        });
      }
  }
  catch (e) {
    return res.status(500).send({
      status: "Failed", 
      message: `Internal server error: ${e.message}`
    });
  }
}

export const UserLogout = async(req, res) => {
  try {
    await queryLogout(req.body.uid, req.body.iat)
    return res.status(200).send({
      message: "Successfully logged out"
    })
  }
  catch (e) {
    return res.status(500).send({
      status: "Failed", 
      message: `Internal server error: ${e.message}`
    });
  }
}

export const getUser = async(req, res) => {
  try {
    const username = req.body.username || ""
    const uid = req.body.uid || -1
    return res.status(200).send( {
      status: "Success",
      payload: {
        uid: uid,
        username: username
      }
    });
  }
  catch (e) {
    return res.status(500).send({
      status: "Failed", 
      message: `Internal server error: ${e.message}`
    });
  }
}


const loginValidation = (body) => {
  const {username, password} = body;
  if (username == undefined || password == undefined) {
    return false;
  } 
  else if (username.length < 1 || password.length < 1) {
    return false;
  }
  return true;
}


const createValidation = (body) => {
  const reg_ex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g; //regex for email validation
  const {email, username, password} = body;
  if (email == undefined || username == undefined || password == undefined) {
    return false;
  }
  else if (email.length < 1 || username.length < 1 || password.length < 1) {
    return false;
  }
  return reg_ex.test(email);
}