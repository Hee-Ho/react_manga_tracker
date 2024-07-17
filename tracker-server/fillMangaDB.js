import { getByName } from "./externalAPI/mangadexAPI.js";
import { queryAddToDB } from "./models/mangaModel.js";

const fillDB = async() => {
  const data = await getByName("Berserk");
  for (let i = 0; i < data.length; i++) {
    const manga = parseManga(data[i]);
    console.log(manga);
    await queryAddToDB(manga);
  }
  return
}

const parseManga = (manga) => {
  const { 
    id, 
    attributes: {
      title: {
        en: title_en
      },
      status,
      updatedAt: updated_At
      }
    } = manga
  return {id, title_en, status, updated_At};
}

fillDB();

