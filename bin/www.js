// var debug = require('debug')('ex-test:server');
const app = require("../app");
const io = require("../config/socket"); //socket 연결
const http = require("http");
const port = 3000; // 기본 port

const server = http.createServer(app);
io.attach(server);
server.listen(port);
