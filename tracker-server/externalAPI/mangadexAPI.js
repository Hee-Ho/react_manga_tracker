import axios from 'axios'

const baseURL = "https://api.mangadex.org"

export const getByName = async(title, limit=12, offset= 0) => {
  try {
    const { data } = await axios({
    method: 'GET',
    url: `${baseURL}/manga`,
    params: {
        title: title,
        limit: limit,
        offset: offset
    }
  })
  const mangas = [];
  for (let i = 0; i < data.data.length; i++) {
    const manga = await parseManga(data.data[i]);
    mangas.push(manga);
  }
  const total = data.total; //total for pagination
  return {mangas, total}
  }
  catch (e) {
    throw {status: e.response.data.errors[0].status};
  }
}

export const getByID = async(manga_id) => {
  try {
    const { data } = await axios.get(`${baseURL}/manga/${manga_id}`);
    console.log("get")
    const manga = await parseManga(data.data);
    return manga;
  } 
  catch (e) {
    throw {status: e.response.data.errors[0].status};
  }

}

export const getRandom = async(limit = 10, offset = 0) => {
  try {
    const { data } = await axios({
    method: 'GET',
    url: `${baseURL}/manga`,
    params: {
        limit: limit,
        offset: offset
    }
  })
  const mangas = [];
  for (let i = 0; i < data.data.length; i++) {
    const manga = await parseManga(data.data[i]);
    mangas.push(manga);
  }
  return mangas
  }
  catch (e) {
    throw {status: e.response.data.errors[0].status};
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
    throw {status: e.response.status, message: e.response.statusText};
  }
}

//parsing result and get image file name
const parseManga = async(manga) => {
  const { 
    id, 
    attributes: {
      title: {
        en: title_en
      },
      description: {
        en: summary
      },
      status,
      updatedAt: updated_At
      },
    relationships
    } = manga;
    let image_id = "";
    relationships.forEach((r) => {
      if (r.type === "cover_art") {
        image_id = r.id;
      }
    });
    try {
      const fileName = await getImageFile(image_id)
      return {id, title_en, summary, status, updated_At, fileName};
    }
    catch {
      const fileName = ""
      return {id, title_en, summary, status, updated_At, fileName};
    }
}