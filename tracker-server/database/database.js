import mysql from 'mysql2'
import dotenv from "dotenv";
dotenv.config()
const dbConnection = await mysql.createPool ({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  enableKeepAlive: true, 
  multipleStatements: true
}).promise() //allow usage of async await

export default dbConnection;