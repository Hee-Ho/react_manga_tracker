import dbConnection from "../database/database.js";

export const queryAllManga = async() => {
  try {
    const [rows] = await dbConnection.query('SELECT * FROM manga_status');
    //console.log(rows);
    return rows;
  }
  catch (e) {
    throw Error ("Unable to retrieve manga record")
  }
}

export const queryAddToDB = async(manga) => {
  try {
    const query = "CALL spInsertManga(?, ?, ?, ?,?)"; 
    const {id, title_en, status, updated_At} = manga;
    const image_path = "path";
    await dbConnection.query(query, [id, title_en, status, updated_At, image_path]);
    return
  } 
  catch (e) {
    throw Error ("Unable to add manga record")
  }
}

export const queryAddToTracking = async(manga, user_id) => {
  try {
    const query = 'SET @status = ""; CALL spAddTracking(?, ?, ?, ?, ?, ?, @status); SELECT @status as message;';
    const {id, title_en, status, updated_At} = manga;
    const image_path = "path";
    const result = await dbConnection.query(query, [id, title_en, status, updated_At, image_path, user_id]);
    return result[0][2][0]
  }
  catch (e) {
    throw Error ("Unable to add manga to tracking")
  }
}

export const queryRemoveTracking = async(manga_id, user_id) => {
  try {
    const query = 'SET @status = ""; CALL spDropTracking(?, ?, @status); SELECT @status as message;';
    const result = await dbConnection.query(query, [manga_id, user_id]);
    return result[0][2][0]
  }
  catch (e) {
    throw Error ("Unable to remove from tracking list")
  }
}

export const queryUserTracking = async(user_id) => {
  try {
    const query = "SELECT userTrack.user_id ,manga.b_id, manga.title_en, manga.b_status, manga.updatedAt FROM manga RIGHT JOIN (SELECT user_id, b_id FROM tracking_list WHERE user_id = ?) AS userTrack ON manga.b_id = userTrack.b_id;"
    const data = await dbConnection.query(query, [user_id]);
    return data[0];
  } 
  catch (e) {
    throw Error("Unable to retrieve user's tracking list")
  }
 
}