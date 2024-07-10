import { queryLogin, queryCreateAccount } from "../models/userModel.js";
import bcrypt from "bcrypt"
import { createHash } from "crypto"

const saltround = 10;

export const userLogin = async(req, res) => {
  try {
    if (!loginValidation(req.body)) {
      res.status(400).send("Bad request")
      return;
    }
    const hash_email = createHash('sha256').update(req.body.email).digest('hex'); 
    const data = await queryLogin(hash_email);
    //data from db is in the first element of array
    if (data[0].length < 1) {
      res.status(404).send("Account not found");
      return;
    }
    const {password, salt} = data[0][0];
    bcrypt.compare(req.body.password, password, (err, result) => {
      if (err) {
        console.log(err.message);
        res.status(500).send(err.message);
      }
      if (!result) {
        res.status(401).send("Incorrect password");
        return;
      }
      else {
        res.status(200).send("Success");
        return;
      }
    })
  }
  catch (e) {
    res.status(500).send(`Internal server error: ${e.message}`);
  }
}

export const createAccount = async(req, res) => {
  try {
    if (!loginValidation(req.body)) {
      res.status(400).send("Bad request")
      return;
    }
    const hash_email = createHash('sha256').update(req.body.email).digest('hex'); 
    const salt = await bcrypt.genSalt(saltround);
    const hash_pw = await bcrypt.hash(req.body.password, salt);
    //insert into db
    const message = await queryCreateAccount(hash_email, hash_pw, salt);
    res.status(200).send(`response: ${message}`);
  }
  catch (e) {
    res.status(500).send(`Internal server error: ${e.message}`);
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

