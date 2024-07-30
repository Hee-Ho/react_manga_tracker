import express from "express";
import { getAllManga, addManga, addToTracking, removeTracking, getUserTracking } from "../controllers/mangaController.js";
import { getByTitleAPI, getRandomAPI } from "../controllers/mangadexController.js";
import { tokenAuthentication } from "../middlewares/dbMiddleware.js";


const mangaRouter = express.Router();
mangaRouter.get("/", getAllManga);
mangaRouter.get("/usertracking", tokenAuthentication, getUserTracking);
mangaRouter.post("/addtracking", tokenAuthentication, addToTracking);
mangaRouter.delete("/removetracking", tokenAuthentication, removeTracking);
mangaRouter.post("/addmanga", addManga);

//mangaDex API
mangaRouter.get("/dexapi/:title", getByTitleAPI); 
mangaRouter.get("/dexapi", getRandomAPI);
export default mangaRouter;