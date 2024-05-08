const mongoose = require("mongoose");
const connect = () => {
    mongoose.connect("mongodb://localhost:27017/plannerz")
        .then(() => {
            db = this;
            console.log("몽고디비 연결 성공");
        })
        .catch((err) => {
            console.log(err);
        });
};

mongoose.connection.on("error", (error) => {
    console.error("몽고디비 연결 에러", error);
});

// mongoose.connection.on("disconnected", () => {
//     console.error("몽고디비 연결이 끊겼습니다. 연결을 재시도 합니다");
//     connect();
// });

// mongoose
//     .connect("mongodb://localhost:27017/plannerz")
//     .then(() => {
//         db = this;
//         console.log("몽고디비 연결 성공");
//     })
//     .catch((error) => {
//         console.log("몽고디비 연결 에러", error);
//     });

module.exports = connect;
