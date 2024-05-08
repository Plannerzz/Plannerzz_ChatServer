const express = require("express");
const app = express();
const mongo_connect = require("./config/db_mongo");

mongo_connect();

// let chatRoomRouter = require("./routes/chatroom");
// app.use("/", chatRoomRouter);

module.exports = app;
