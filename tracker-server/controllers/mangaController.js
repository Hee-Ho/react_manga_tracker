import { queryAllManga, queryAddToTracking, queryAddToDB, queryRemoveTracking, queryUserTracking } from "../models/mangaModel.js";

const code400 = { 
      status: "failed",
      message: "Bad request"}

export const getAllManga = async(req, res) => {
  try {
    const data = await queryAllManga()
    return res.status(200).json({
      data: data
    })
  }
  catch (e) {
    return res.status(500).json({
      message: e.message
    })
  }
}

export const addManga = async(req, res) => {
  try {
    if (!checkMangaFields(req.body) ) {
      return res.status(400).json(code400)
    }
    await queryAddToDB(req.body);
    return res.status(200).json({
      message: "Successfully added to database"
    })
  }
  catch (e) {
    return res.status(500).json({
      message: e.message
    })
  }
}

export const addToTracking = async(req, res) => {
  try {
    if (req.body.manga == undefined || req.body.uid == undefined || !checkMangaFields(req.body.manga) || !checkUID(req.body.uid)) {
      return res.status(400).json(code400)
    }
    const {manga, uid} = req.body;
    const data = await queryAddToTracking(manga, uid);
    return res.status(200).json({
      status: "success",
      message: data.message
    })
  }
  catch (e) {
    return res.status(500).json({
      message: e.message
    })
  }
} 

export const removeTracking = async(req, res) => {
  try {
    if (req.body.bid == undefined || req.body.uid == undefined || !checkUID(req.body.uid)) {
      return res.status(400).json(code400)
    }
    const { bid, uid } = req.body;
    const data = await queryRemoveTracking(bid, uid);
    return res.status(200).json({
      status: "success",
      message: data.message
    })
  } 
  catch (e) {
    return res.status(500).json({
      message: e.message
    })
  }
}

export const getUserTracking = async(req, res) => {
  try {
    const data = await queryUserTracking(req.body.uid);
    return res.status(200).json({
      status: "success",
      payload: data
    })
  }
  catch (e) {
    return res.status(500).json({
      status: "failed",
      message: e.message
    })
  }
}

//-------------------------------------------------------------------------------------------

const checkMangaFields = (manga) => {
  if (!manga.hasOwnProperty('id') || !manga.hasOwnProperty('title_en') 
    || !manga.hasOwnProperty('status') || !manga.hasOwnProperty('updated_At')) {
    return false;
  } 
  return true;
} 

const checkUID = (uid) => {
  if (typeof(uid) != "number") {
    return false;
  }
  return true;
}