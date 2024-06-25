import userModel from "../models/userModel.js";

//Controller handle all the endpoint logic
const userController = {
  login: (req, res) => {
    const data = userModel.queryLogin()
    console.log(data);
    return res.status(200).json({
      status: 200,
      data: data
    })
  } 
}

export default userController;
