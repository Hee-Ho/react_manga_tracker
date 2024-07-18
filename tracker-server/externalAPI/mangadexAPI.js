import axios from 'axios'

const baseURL = "https://api.mangadex.org"

export const getByName = async(title) => {
  try {
    const { data } = await axios({
    method: 'GET',
    url: `${baseURL}/manga`,
    params: {
        title: title,
        limit: 10
    }
  })
  return data.data
  }
  catch (e) {
    throw Error ("External API error");
  }
}