import express from "express";
import userController from "../controllers/userController.js";
const userRouter = express.Router();

userRouter.get("/", userController.login);

export default userRouter;
