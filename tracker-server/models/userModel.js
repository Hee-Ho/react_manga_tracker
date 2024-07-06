import dbConnection from "../database/database.js";

//Model handle all database related action 
export const queryLogin = async(username) => {
  try {
    const account = await dbConnection.query('SELECT password, salt FROM user_accounts WHERE email = ?', [username]);
    return account;
  } 
  catch (e) {
    throw Error ("Unable to retrieve account information")
  }
}

export const queryCreateAccount = async(username, password, salt) => {
  try {
    //execute stored procedure
  }
  catch (e) {
    throw Error ("Unable to create account")
  }
}

