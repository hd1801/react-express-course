import bodyParser from "body-parser";
import cors from 'cors';
import express from "express";
import morgan from "morgan";
import { connectDB } from "../db/postgres";
import { authorsRouter, coursesRouter } from "./routes";
const app = express();
connectDB();
const port = 3010;

// TODO: Add a middleware to validate params and body.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("uploads"));
app.use(cors())
app.use(bodyParser.json());

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Hello, world!");
});
app.use("/courses", coursesRouter);
app.use("/authors", authorsRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
