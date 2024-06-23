const express = require("express");
const cors = require("cors");
const { connection } = require("./db");
const { userController } = require("./Controllers/user.routes");
const app = express();

app.use(cors());

app.use(express.json())

app.get("/data", async (req, res) => {
  res.json({ message: "Hello I am a live api for your website" });
});

app.use("/users",userController)

app.listen("8001", async (req, res) => {
  console.log("I am running on port 8001");

  try {
    connection;
    console.log("I am connected to mongoDB database");
  } catch (err) {
    console.log(err);
  }
});
