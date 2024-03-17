import express from "express";
import { connectDB } from "../db/postgres";
const app = express();
connectDB();
const port = 3010;

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
