import dbConnection from "../database/database.js";

//Model handle all database related action 
export const queryLogin = async(username) => {
  try {
    const account = await dbConnection.query('SELECT email, password, salt FROM user_accounts WHERE email = ?', [username]);
    return account;
  } 
  catch (e) {
    throw Error ("Unable to retrieve account information")
  }
}

export const queryCreateAccount = async(username, password, salt) => {
  try {
    //execute stored procedure
    const result = await dbConnection.query(
      'set @status = 0;' + 
      'CALL spCreateAccount(?, ?, ?, @status);' +
      'SELECT @status', [username, password, salt]);
    console.log(result[0][2][0])
  }
  catch (e) {
    throw Error ("Unable to create account")
  }
}

