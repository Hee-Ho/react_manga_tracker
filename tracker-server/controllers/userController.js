import { queryLogin, queryCreateAccount } from "../models/userModel.js";
import bcrypt from "bcrypt"
import { createHash } from "crypto"

const saltround = 10;

export const userLogin = async(req, res) => {
  try {
    if (!loginValidation(req.body)) {
      return res.status(400).send({
        status: "Failed",
        message: "Bad request"})
    }
    const hash_email = createHash('sha256').update(req.body.email).digest('hex'); 
    const data = await queryLogin(hash_email);
    //data from db is in the first element of array
    if (data.length < 1) {
      return res.status(404).send({
        status: "Failed", 
        message: "Account not found"
      });
    }
    const {user_id, password} = data[0];
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
        return res.status(200).send( {
          status: "Success",
          message: "Logged in successfully",
          payload: {
            uid: user_id,
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
    if (!loginValidation(req.body)) {
      return res.status(400).send({
        status: "Failed",
        message: "Bad request"})
    }
    const hash_email = createHash('sha256').update(req.body.email).digest('hex'); 
    const salt = await bcrypt.genSalt(saltround);
    const hash_pw = await bcrypt.hash(req.body.password, salt);
    //insert into db
    const {message, user_id} = await queryCreateAccount(hash_email, hash_pw, salt);
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

const loginValidation = (body) => {
  //regex for email validation
  const email_re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (!body.hasOwnProperty('email') || !body.hasOwnProperty('password')) {
    return false;
  } 
  else if (body.email.length < 1 || body.password.length < 1) {
    return false;
  }
  if (!email_re.test(body.email)) {
    return false;
  } 
  return true
}

