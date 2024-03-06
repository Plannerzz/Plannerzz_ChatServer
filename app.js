const express = require("express");
const app = express();
const io = require("./socket");

let indexRouter = require("./routes/chatroom");
app.use("/", indexRouter);


module.exports = app;
