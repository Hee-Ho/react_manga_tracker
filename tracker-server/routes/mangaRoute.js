import express from "express";
import { getAllManga, addManga, addToTracking, removeTracking, getUserTracking } from "../controllers/mangaController.js";
const mangaRouter = express.Router();

mangaRouter.get("/", getAllManga);
mangaRouter.get("/usertracking", getUserTracking);
mangaRouter.post("/addmanga", addManga);
mangaRouter.post("/addtracking", addToTracking);
mangaRouter.delete("/removetracking", removeTracking);

export default mangaRouter;