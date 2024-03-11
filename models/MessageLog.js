const mongoose = require("mongoose");

const { Schema } = mongoose;
/**
 * 방 번호, 유저 번호, 텍스트 내용, 보낸 시간
 */
const logSchema = new Schema({
    roomId: {
        type: Number, // 자료형
        required: true, // 필수 여부
    },
    userNo: {
        type: Number,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
    },
});

module.exports = mongoose.model("MessageLog", logSchema);
