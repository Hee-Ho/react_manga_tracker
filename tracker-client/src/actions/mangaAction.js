import axios from "axios";

const server = "http://localhost:8000";
axios.defaults.withCredentials = true;

export const getUserTracking = async() => {
  try {
    const url = server + "/manga/usertracking";
    const { data } = await axios.get(url);
    return data.payload

  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);
    throw error
  }
}

export const getProfileTracking = async(profile_id) => {
  try {
    console.log(profile_id)
    const url = server + "/manga/profiletracking";
    const { data } = await axios.get(url,
      {
        params: {
          uid: profile_id
        }
      }
    );
    return data.payload

  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);
    throw error
  }
}

export const addToTracking = async(manga) => {
  try {
    const url = server + "/manga/addtracking";
    const res = await axios.post(
      url, {
        manga: manga
      }
    )
    console.log(res)
    return true
  }
  catch (error) {
    console.error(error)
    return false
  }
}

export const removeFromTracking = async(manga) => {
  try {
    console.log(manga.id)
    const url = server + "/manga/removetracking";
    const res = await axios.post(
      url, {
        bid: manga.id
      }
    )
    console.log(res)
    return true
  }
  catch (error) {
    console.error(error)
    return false
  }
}

export const getTrackingStatus = async(manga_id) => {
  try {
    const url = server + "/manga/usertracking/check/" + manga_id
    const { data } = await axios.get(url)
    return data.payload
  }
  catch (error) {
    console.error(error)
    return false
  }
}

