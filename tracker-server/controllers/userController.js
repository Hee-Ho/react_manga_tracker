import { queryLogin, queryCreateAccount } from "../models/userModel.js";

export const userLogin = async(req, res) => {
  try {
    if (!loginValidation(req.body)) {
      res.status(400).send("Bad request")
      return;
    }
    const {email, password} = req.body
    const data = await queryLogin(email);
    //data from db is in the first element of array
    if (data[0].length < 1) {
      res.status(404).send("Account not found");
      return;
    }
      res.status(200).send("Success");
  }
  catch (e) {
    res.status(500).send("Internal server error");
  }
}

export const createAccount = async(req, res) => {
  try {
    if (!loginValidation(req.body)) {
      res.status(400).send("Bad request")
      return;
    }
    const {email, password} = req.body;
    const salt = 'salt';
    //Salting and hashing here?
    queryCreateAccount(email, password, salt)
    res.status(200).send("Success");
  }
  catch (e) {
    res.status(500).send(e.message);
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
    console.log("reg ex")
    return false;
  } 
  return true
}

