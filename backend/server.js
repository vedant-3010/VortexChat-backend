const express = require("express");
const chats = require("./data/data");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

connectDB();

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  // console.log(req.params.id);
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
