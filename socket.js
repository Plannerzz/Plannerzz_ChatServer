const SocketIO = require("socket.io");

module.exports = (server) => {
    const io = SocketIO(server, {
        cors: {
            origin: "*",
        }
    })
    const chat = io.of("/chat");
    let roomid = ''
    chat.on("connection", (socket) => {
        //현재 조인한 Room id 출력
        // roomid = socket.handshake.query.roomid
        // console.log("User joined Room Id : " + roomid)
        //Room 조인
        // socket.join(roomid)

        socket.on("user-join", (roomid) => {
            console.log("joined from " + roomid)
            socket.join(roomid)
        })

        socket.on("chat-msg", (msg, roomid) => {
            console.log("msg from : " + roomid)
            chat.to(roomid).emit("messages", msg);
        });

        socket.on("disconnect", () => {
            console.log("user disconnected");
        });
    });

    //디버그용 소켓
    // const debug = io.of("/debug")
    // debug.on('connection', (socket) => {

    // })
}
