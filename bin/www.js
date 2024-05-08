// var debug = require('debug')('ex-test:server');
const app = require("../app");
const http = require("http");
const webSocket = require('../socket')
const port = 3000; // 기본 port

const server = http.createServer(app);
webSocket(server)
server.listen(port);
