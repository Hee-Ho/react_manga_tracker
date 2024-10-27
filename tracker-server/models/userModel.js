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

export const queryLogout = async(uid, iat) => {
  try {
    const query = "INSERT INTO invalid_tokens(user_id, iat) VALUES (?, ?)"
    await dbConnection.query(query, [uid, iat])
    return
  } catch (e) {
    throw Error ("Error occurred while logging out")
  }
}

export const queryVerifyToken = async(uid, iat) => {
    const query = "Select user_id from Invalid_tokens where user_id = ? and iat = ?"
    const data = await dbConnection.query(query, [uid, iat])
    return data[0].length

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


