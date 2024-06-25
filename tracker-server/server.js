import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import userRouter from "./routes/userRoute.js";

const app = express()
const port = 8000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res, next) => {
  res.status(200).json({ message: "server is running" });
});

//add user route
app.use("/user", userRouter);

app.listen(port, function () {
  console.log(`Server is listening on port ${port}!`);
});