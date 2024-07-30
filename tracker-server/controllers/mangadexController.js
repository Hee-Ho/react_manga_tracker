import { getByName, getRandom } from "../externalAPI/mangadexAPI.js";

export const getByTitleAPI = async(req, res) => {
  try {
    const { title } = req.params;
    const data = await getByName(title);
    return res.status(200).json({
      data: data
    })
  }
  catch (e) {
    return res.status(404);
  }
}

export const getRandomAPI = async(req, res) => {
  try {
    const data = await getRandom();
    return res.status(200).json({
      data: data
    })
  }
  catch (e) {
    return res.status(Number(e.status)).json({
      message: e.message
    });
  }
}