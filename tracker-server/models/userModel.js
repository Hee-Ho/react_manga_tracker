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

export const queryCreateAccount = async(email, password, username, salt) => {
    try {
      const query = 'SET @status = ""; SET @uid = 0; SET @uname = ""; CALL spCreateAccount(?, ?, ?, ?, @status, @uid, @uname); SELECT @status as message, @uid as user_id, @uname as username;';
      const result = await dbConnection.query(query, [email, password, username, salt]);
      return result[0][4][0];
    }
    catch (e) {
      throw Error ("Unable to create account")
    }
}

