import dbConnection from "../database/database.js";

export const queryAllManga = async() => {
  try {
    const [rows] = await dbConnection.query('SELECT * FROM manga_status');
    return rows[0];
  }
  catch (e) {
    throw Error ("Unable to retrieve manga record")
  }
}