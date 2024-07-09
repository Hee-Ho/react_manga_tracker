import express from "express";
import { userLogin, createAccount }from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/login", userLogin);
userRouter.post("/createAccount", createAccount)

export default userRouter;
