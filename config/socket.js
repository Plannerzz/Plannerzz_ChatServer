const io = require("socket.io")();

// namespace 생성
const chat = io.of("/chat");

chat.on("connection", (socket) => {
    console.log("user entered");

    socket.on("disconnect", () => {
        console.log("user disconnected");
    });

    socket.on("message", (msg) => {
        socket.emit("message", msg);
    });
});

module.exports = io;
