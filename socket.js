const SocketIO = require("socket.io");

module.exports = (server) => {
    const io = SocketIO(server);
    io.on("connection", (socket) => {
        console.log("user entered");

        socket.on("disconnect", () => {
            console.log("user disconnected");
        });

        socket.on("message", (msg) => {
            io.emit("message", msgㅋ);
        });
    });
};
