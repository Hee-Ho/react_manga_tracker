import express from "express";
import { getAllManga } from "../controllers/mangaController.js";
const mangaRouter = express.Router();

mangaRouter.get("/", getAllManga);

export default mangaRouter;