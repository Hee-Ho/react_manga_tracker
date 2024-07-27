import { getByName, getImageFile } from "./externalAPI/mangadexAPI.js";
import { queryAddToDB } from "./models/mangaModel.js";

const fillDB = async() => {
  const data = await getByName("Berserk", 10);
  for (let i = 0; i < data.length; i++) {
    const manga = await parseManga(data[i]);
    console.log(manga);
    await queryAddToDB(manga);
  }
  return
}

const parseManga = async(manga) => {
  const { 
    id, 
    attributes: {
      title: {
        en: title_en
      },
      status,
      updatedAt: updated_At
      },
    relationships
    } = manga;
    let image_id = "";
    relationships.forEach((r) => {
      if (r.type == "cover_art") {
        image_id = r.id;
      }
    });
    const fileName = await getImageFile(image_id)
  return {id, title_en, status, updated_At, fileName};
}

fillDB();

