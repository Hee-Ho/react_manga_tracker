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
  //Create stored procedure for checking if manga exist in db and then insert/update the record
}

export const queryAddToTracking = async(manga, user_id) => {

}

export const queryRemoveTracking = async(manga, user_id) => {

}

export const queryUserTracking = async(user_id) => {

}