import axios from 'axios'

const baseURL = "http://localhost:8000"

export const getManga= async(title="", limit=10) => {
  try {
    const { data } = await axios({
    method: 'GET',
    url: `${baseURL}/manga/dexapi/${title}`,
    params: {
      limit: limit
    }
  })
  return data.data;
  }
  catch (e) {
    throw Error ("External API error");
  }
}

export const getMangaByID = async(manga_id) => {
  try {
    const { data } = await axios({
    method: 'GET',
    url: `${baseURL}/manga/dexapi/id/${manga_id}`,
  })
  return data.data;
  }
  catch (e) {
    throw Error ("External API error");
  }
}

export const loadManga = async(limit=10) => {
  try {
    const { data } = await axios({
    method: 'GET',
    url: `${baseURL}/manga/dexapi`,
    params: {
        limit: limit
    }
  })
  return data.data;
  }
  catch (e) {
    throw Error ("External API error");
  }
}
