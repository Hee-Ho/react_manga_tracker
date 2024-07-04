import axios from 'axios'

const baseURL = "https://api.mangadex.org"

export const getByName = async(title) => {
  const { data } = await axios({
    method: 'GET',
    url: `${baseURL}/manga`,
    params: {
        title: title,
        limit: 1
    }
  })
  return data.data
}