import axios from "axios";

const server = "http://localhost:8000";
axios.defaults.withCredentials = true;

export const getUserTracking = async() => {
  try {
    const url = server + "/manga/usertracking";
    const { payload } = await axios.get(url);
    console.log(payload)
    return payload

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

  }
  catch (error) {
    if (error.response) {
      //if request is made and server response with error
    }
    else if (error.request) {
      //if request is made but no response received
    }
    else {

    }

  }
}

export const removeFromTracking = async(mangaID) => {

}

