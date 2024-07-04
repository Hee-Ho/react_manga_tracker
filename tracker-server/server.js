import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import userRouter from "./routes/userRoute.js";
import mangaRouter from "./routes/mangaRoute.js";

const app = express()
const port = 8000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//May need to check if database is up first

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

app.listen(port, function () {
  console.log(`Server is listening on port ${port}!`);
});