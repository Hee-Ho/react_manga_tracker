import dbConnection from "../database/database.js";

//Model handle all database related action 
export const queryLogin = async(username) => {
  try {
    const query = 'CALL spGetAccount(?)';
    const account = await dbConnection.query(query, [username]);
    return account[0][0];
  } 
  catch (e) {
    throw Error ("Unable to retrieve account information")
  }
}

export const queryCreateAccount = async(username, password, salt) => {
    try {
      const query = 'SET @status = ""; SET @uid = 0; CALL spCreateAccount(?, ?, ?, @status, @uid); SELECT @status as message, @uid as user_id;';
      const result = await dbConnection.query(query, [username, password, salt])
      return result[0][3][0];
    }
    catch (e) {
      throw Error ("Unable to create account")
    }
}

