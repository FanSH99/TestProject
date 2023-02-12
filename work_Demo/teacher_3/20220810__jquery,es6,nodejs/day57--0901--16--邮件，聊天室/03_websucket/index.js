/* 2022年9月1日14:58:13 */

let express = require("express");
// 引入nodejs的websocket模块儿
let ws = require("nodejs-websocket");

let web = express();

// 创建websocket模块。
web.use(express.static("public"));
// 创建websocket服务
let server = ws.createServer((connet) => {
    console.log(connet);
    console.log("有新用户连接");
    connet.on("text", (data) => {
        // 监听客户端发送的消息
        console.log(data);
        // connet.sendText(`新消息: ${data}`)
        sendAll(data);
    })
    connet.on("close", () => {
        console.log("连接关闭");
    })
    connet.on("error", () => {
        console.log("连接异常");
    })
})

// 定义一个方法--广播 ---只要有
function sendAll(data) {
    server.connections.forEach((connet) => {
        connet.sendText(data);
    })
}
// 监听websocket服务端口，注意不要和其他端口冲突。
server.listen(8000);

// 监听端口
web.listen(8080, () => {
    console.log("服务端8080已启动");
})

// 一个用户不能重复连接，否则报错。