let express = require("express");
let web = express();
web.use(express.static("public"));
// cokie是一种能够在服务端和客户端通信的技术，cookie不仅可以存储到客户端也可以存储到服务端
// cookie通常用来做登录验证
// cookie的传递方式是 cookiename=值 所用需要使用到第三方模块儿cookie-parser 来处理cookie
let cookieParser = require("cookie-parser");
// 使用cookieParser
web.use(cookieParser())
web.get("/user/login",(req,res)=>{
    // 给客户端设置cookie; 参数一cookie属性名 参数二 cookie属性值 参数三 cookie有效期
    res.cookie("username",req.query.username)
    res.send("登录成功")
})
// 判断用户是否登录
web.get("/islogin",(req,res)=>{
    // 获取客户端存储的cookie
    let username = req.cookies.username;
    console.log(username)
    if(username){
        res.send("已登录")
    }else{
        res.send("未登录")
    }
})
web.get("/outLogin",(req,res)=>{
    // 删除客户端的cookie
    res.clearCookie("username");
    res.send("退出成功")
})
web.listen(8080,()=>{
    console.log("服务端已启动")
})