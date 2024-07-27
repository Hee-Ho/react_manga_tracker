import axios from 'axios'

const baseURL = "https://api.mangadex.org"

export const getByName = async(title, limit=10) => {
  try {
    const { data } = await axios({
    method: 'GET',
    url: `${baseURL}/manga`,
    params: {
        title: title,
        limit: limit
    }
  })
  return data.data
  }
  catch (e) {
    throw Error ("External API error");
  }
}

export const getImageFile = async(image_id) => {
  try {
    const { data } = await axios({
      method: 'GET',
      url: `${baseURL}/cover/${image_id}`,
    })
    const {
      attributes: {
        fileName
    }} = data.data
    return fileName;
  } catch (e) {
    throw Error("External API error")
  }
}