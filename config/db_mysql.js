const mysql = require("mysql2");

const db_info = {
    host: "127.0.0.1",
    port: "3306",
    user: "root",
    password: "12345678",
    database: "Plannerz",
};

const connect = () => {
    const conn = mysql.createConnection(db_info);
    conn.connect((err) => {
        if (err) {
            console.error("MySQL 연결 오류 : " + err);
        } else {
            console.log("MySQL 연결 성공");
        }
    });
};

module.exports = connect;
