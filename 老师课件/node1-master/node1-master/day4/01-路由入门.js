/* 
路由(route)与路由器(router)
    路由就是从一点到另一点所需要走的路径，路由器就是在路口上安装的设备。
    互联网有很多的广域网、局域网。路由器就是网络种的枢纽(交通警察)。
    路由器的一个作用是连通不同的网络，另一个作用是选择信息传送的线路。

    Express 中，路由指客户端请求(url 和 参数) 与服务器响应结果之间的映射关系。
    Express 中路由分3部分，分别是 请求类型、请求的 URL 地址，处理函数(回调函数)：
        app.method(path, callback);
        案例见：下面代码
            1. 从上往下匹配
            2. 请求类型 和 url 都成功，才执行对应的回调函数。
            3. 匹配成功，将不再往下匹配。

    使用 express 步骤    
        1. npm init -y   
        2. npm i express@4.17.1
        3. 导入 express 
*/
const express = require("express");

const app = express();

// 挂载路由
app.get("/game", (req, res) => {
  console.log("dota");
  res.send("今晚吃鸡");
});


app.post("/game", (req, res) => {
  res.send("post, 为了联盟");
});

// 匹配成功，不再继续匹配
app.get("/game", (req, res) => {
  console.log("剑圣圣剑无敌斩斩敌无数");
  res.send("为了部落");
});

app.listen(8080, () => {
  console.log("服务已启动, 127.0.0.1:8080");
});
