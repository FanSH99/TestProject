/* 2022年8月26日09:47:36 */


let express = require("express")

let web = express();
web.use(express.static("public"));
// 用来存储已登录的用户信息，
let userMsg = {};

/* cokie是一种能够在服务端和客户端通信的技术，cookie不仅可以存储到客户端，还可以存储到服务端。
cookie通常用来做登陆验证
cookie的传递方式是 cookiename=值  需要用到第三方模块来处理cookie   cookie-parser
*/

let cookieParser = require("cookie-parser");
web.use(cookieParser());

let makeToken = require("./tools/makeToken");
web.get("/user/login", (req, res) => {
    // 随机生成一个20位的coken
    let token = makeToken();
    // 设置客户端cookie 为token
    res.cookie("token", token);
    userMsg[token] = req.query;
    res.send("登录成功")
})

// 判断用户是否登录，即判断是否有cookie
web.get("/islogin", (req, res) => {
    // 获取token
    let token = req.cookies.token;
    if (userMsg[token]) {
        res.send(`用户${userMsg[token].username}已登录`)
    } else {
        res.send("未登录");
    }
})

web.get("/out/login", (req, res) => {
    res.clearCookie("token");
    userMsg[req.cookies.token] = null;
    res.send("退出成功");
})

web.listen(8080, () => {
    console.log("服务器已启动~~~~~~");
})

/* 
1.下载cookie-parser
2.res.cookie("属性名","属性值")设置客户端cookie
3.req.cookie.属性名获取客户端cookie
4.res.clearCookie("属性名")删除客户端cookie
*/