const express = require("express");
const app = express();
const port = 3000;
const webSocket = require("./socket");
const server = app.listen(port, () => console.log(`Chat Server is running at localhost:${port}`));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

webSocket(server);
