/* 2022年8月26日09:08:21 */
let express = require("express");

let web = express();
web.use(express.static("public"));

/* cokie是一种能够在服务端和客户端通信的技术，cookie不仅可以存储到客户端，还可以存储到服务端。
cookie通常用来做登陆验证
cookie的传递方式是 cookiename=值  需要用到第三方模块来处理cookie   cookie-parser
*/

let cookieParser = require("cookie-parser");
web.use(cookieParser());
web.get("/user/login", (req, res) => {
    // 给客户端设置cookie  参数一cookie属性名，参数二cookie属性值，参数三是要设置的cookie的有效期， 如果不写参数三，默认是永久有效的。
    res.cookie("username", req.query.username, {
        // 以秒为单位， 60秒*60*24=1天
        maxAge: 60 * 60 * 24
    });
    res.send("登录成功")
})

// 判断用户是否登录，即判断是否有cookie

web.get("/islogin", (req, res) => {
    // 前端会自动传递cookie 获取客户端存储的cookie
    let username = req.cookies.username;
    console.log(username);
    if (username) {
        res.send("已登录")
    } else {
        res.send("未登录")
    }
})

web.get("/outlogin", (req, res) => {
    // 如果退出登录，删除客户端的cookie
    res.clearCookie("username");
    res.send("退出成功")
})
web.listen(8080, () => {
    console.log("服务器已启动~~~~~~");
})