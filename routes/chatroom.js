const path = require("path"); // 파일 폴더 가져오기
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/../", "views", "index.html")); //경로 별로 나누어서 Path 생성
});

module.exports = router;
