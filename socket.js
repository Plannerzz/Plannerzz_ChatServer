const io = require("socket.io")();

io.on("connection", (socket) => {
    console.log("user entered");

    socket.on("disconnect", () => {
        console.log("user disconnected");
    });

    socket.on("message", (msg) => {
        socket.emit("message", msg);
    });
});

module.exports = io;
