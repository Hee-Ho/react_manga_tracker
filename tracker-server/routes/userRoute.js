import express from "express";
import { userLogin, createAccount, getUsername }from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/login", userLogin);
userRouter.post("/createAccount", createAccount)
userRouter.post("/getUsername", getUsername)

export default userRouter;
