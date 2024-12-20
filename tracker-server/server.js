import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import userRouter from "./routes/userRoute.js";
import mangaRouter from "./routes/mangaRoute.js";
import dbConnection from "./database/database.js";
import dotenv from "dotenv";
import { confirmDBconnection, tokenAuthentication } from "./middlewares/dbMiddleware.js";

dotenv.config()
const app = express()
const port = process.env.PORT || 8000;

app.use(cors({origin: true, credentials:true}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((err, req, res, next) => {
  console.err(err.stack)
  res.status(500).send("Server error")
})

app.get("/", (req, res, next) => {
  res.status(200).json({ message: "server is running" });
});

//add user route
app.use("/user", userRouter);
app.use("/manga", mangaRouter);


//check if database server is running
dbConnection.query("Select 1")
  .then(() => {
    console.log("Connected to database")
    app.listen(port, 
      () => console.log(`Server is listening on port ${port}!`)
  )})
  .catch (err => {
    console.log("Failed to connect to database, exiting")
    console.log(err)
  })
