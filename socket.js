const SocketIO = require("socket.io");
const MessageLog = require("./models/MessageLog");

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

        socket.on("user-join", (userid, roomid) => {
            console.log("joined " + userid + " at " + roomid)
            socket.join(roomid)

            //기존에 저장된 메시지 로그 전달
            MessageLog.find({ roomId: roomid })
                .then((logs) => {
                    console.log(JSON.stringify(logs))
                    chat.to(roomid).emit('logdata' + userid, JSON.stringify(logs))
                })
                .catch((err) => {
                    console.error(err);
                    next(err);
                });
        })

        socket.on("chat-msg", (msg, userid, username, roomid) => {
            console.log("msg from : " + roomid)
            console.log("username : " + username)
            //메시지 로그 저장
            const message = new MessageLog({
                roomId: roomid,
                userNo: userid,
                userName: username,
                comment: msg,
            });

            message
                .save()
                .then((result) => {
                    console.log(result);
                    chat.to(roomid).emit("messages", JSON.stringify(message));
                })
                .catch((err) => {
                    console.error(err);
                });
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
