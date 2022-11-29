require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const authRouter = require("./routes/auth");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECT);
    console.log("connected to db");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

connectDB();

const app = express();
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.static("public"));

app.use("/api/auth", authRouter);
app.get("/", (req, res) => res.send("Hello world"));

const PORT = 5000;

app.listen(PORT, () => console.log("Server started on port " + PORT));
