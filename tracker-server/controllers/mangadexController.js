import { getByName, getByID } from "../externalAPI/mangadexAPI.js";

export const getMangaAPI = async(req, res) => {
  try {
    const { title } = req.params || "";
    const { limit, offset } = req.query;
    console.log(offset);
    const data = await getByName(title, limit, offset);
    return res.status(200).json({
      data: data
    })
  }
  catch (e) {
    return res.status(404).json({
      message: "Title not found"
    });
  }
}

export const APIgetByID = async(req, res) => {
  try {
    const { manga_id } = req.params;
    const data = await getByID(manga_id);
    return res.status(200).json({
      data: data
    })
  }
  catch (e) {
    return res.status(404).json({
      message: "Title not found"
    });
  }
}
