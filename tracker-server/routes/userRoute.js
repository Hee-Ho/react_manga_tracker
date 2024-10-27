import express from "express";

import { userLogin, createAccount, UserLogout, getUser, getUsername }from "../controllers/userController.js";
import { tokenAuthentication } from "../middlewares/dbMiddleware.js";


const userRouter = express.Router();

userRouter.post("/login", userLogin);
userRouter.post("/createAccount", createAccount)

userRouter.post("/logout", tokenAuthentication, UserLogout)
userRouter.get("/userInfo", tokenAuthentication, getUser)
userRouter.post("/getUsername", getUsername)


export default userRouter;
