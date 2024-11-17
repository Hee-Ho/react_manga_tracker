import express from "express";
import { getAllManga, addManga, addToTracking, removeTracking, getUserTracking, getProfileTracking } from "../controllers/mangaController.js";
import { getMangaAPI, APIgetByID } from "../controllers/mangadexController.js";
import { tokenAuthentication } from "../middlewares/dbMiddleware.js";


const mangaRouter = express.Router();
mangaRouter.get("/", getAllManga);
mangaRouter.get("/profiletracking", getProfileTracking);
mangaRouter.get("/usertracking", tokenAuthentication, getUserTracking);
mangaRouter.post("/addtracking", tokenAuthentication, addToTracking);
mangaRouter.post("/removetracking", tokenAuthentication, removeTracking);
mangaRouter.post("/addmanga", addManga);

//mangaDex API
mangaRouter.get("/dexapi/:title?", getMangaAPI);
mangaRouter.get("/dexapi/id/:manga_id", APIgetByID);
export default mangaRouter;