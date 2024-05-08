const path = require("path"); // 파일 폴더 가져오기
const express = require("express");
const router = express.Router();
const MessageLog = require("../models/MessageLog");

router.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname + "/../", "views", "chatroom.html")); //경로 별로 나누어서 Path 생성
    const message = new MessageLog({
        roomId: 1,
        userNo: 1,
        comment: "abc",
    });

    message
        .save()
        .then((result) => {
            console.log(result);
        })
        .catch((err) => {
            console.error(err);
            next(err);
        });

    // MessageLog.find()
    //     .then((users) => {
    //         res.json(users);
    //     })
    //     .catch((err) => {
    //         console.error(err);
    //         next(err);
    //     });
});

module.exports = router;
