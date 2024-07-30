import axios from 'axios'

const baseURL = "http://localhost:8000"

export const getByName = async(title, limit=10) => {
  try {
    const { data } = await axios({
    method: 'GET',
    url: `${baseURL}/manga/dexapi/${title}`
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