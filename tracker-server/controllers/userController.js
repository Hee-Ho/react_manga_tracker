import { queryLogin, queryCreateAccount } from "../models/userModel.js";

export const userLogin = async(req, res) => {
  try {
    const {username, password} = req.body
    const data = await queryLogin(username);
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

  }
  catch (e) {
    res.status(500).send("Internal server error");
  }
}

