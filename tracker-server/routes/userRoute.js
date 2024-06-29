import express from "express";
import { userLogin }from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/", userLogin);

export default userRouter;
