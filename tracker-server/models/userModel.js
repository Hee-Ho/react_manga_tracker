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
  //execute stored procedure
  try {
    const query = 'SET @status = ""; CALL spCreateAccount(?, ?, ?, @status); SELECT @status as message;';
    const result = await dbConnection.query(query, [username, password,salt])
    return result[0][2][0].message;
  }
  catch (e) {
    throw Error ("Unable to create account")
  }

}

