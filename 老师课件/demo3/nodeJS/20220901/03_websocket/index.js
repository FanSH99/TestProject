let express = require('express');
// 引入 nodejs websocket 模块儿
let ws = require("nodejs-websocket");

let app = express();
app.use(express.static("public"));
// 创建 socket 服务
let server = ws.createServer((connet) => {
    console.log("有新得用户链接")
    // 监听客户端发送得消息
    connet.on("text", function (data) {
        // data 就是客户端发送得消息
        console.log(data)
        // connet.sendText(`新消息:${data}`)
        sendAll(data)
    })
    connet.on("close", () => {
        console.log("链接关闭")
    })
    connet.on("error", () => {
        console.log("连接异常")
    })
})
function sendAll(data) {
    server.connections.forEach((connet) => {
        connet.sendText(data)
    })
}
// 监听端口
server.listen(8000)
// 监听端口
app.listen(8080, () => {
    console.log("服务端已启动!!")
})