import { queryLogin } from "../models/userModel.js";

export const userLogin = async(req, res) => {
  const credential = await queryLogin();
  res.status(200).json({
    data: credential
  })
}

