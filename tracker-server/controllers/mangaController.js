import { queryAllManga } from "../models/mangaModel.js";

export const getAllManga = async(req, res) => {
  try {
    const data = await queryAllManga()
    res.status(200).json({
      data: data
    })
  }
  catch (e) {
    res.status(400).json({
      message: e.message
    })
  }
}