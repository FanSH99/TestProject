let express = require("express");
let web = express();
web.use(express.static("public"));
let cookieParser = require("cookie-parser");
web.use(cookieParser());
// 用来存储已登录的用户信息
let userMsg = {};
// 导入生成token函数
let makeToken = require("./tools/makeToken")
web.get("/user/login",(req,res)=>{
    // 随机生成token 20位
    let token = makeToken();
    // 设置客户端cookie为token
    res.cookie("token",token)
    userMsg[token] = req.query;
    res.send("登录成功")
})

web.get("/isLogin",(req,res)=>{
     let token  = req.cookies.token;
     console.log(userMsg[token])
     if(userMsg[token]){
        res.send(`用户${userMsg[token].username}已登录`)
     }else{
        res.send("未登录")
     }
})
web.get("/out/login",(req,res)=>{
    res.clearCookie("token");
    userMsg[req.cookies.token] = null;
    res.send("退出成功")
})
web.listen(8080,()=>{
    console.log("服务端以启动")
})

/* 
1. cookie-parser
2. res.cookie("属性名","属性值") 设置客户端cookie
3. req.cookies.属性名 获取客户端cookie
4. res.clearCookie("属性名") 删除客户端cookie
*/