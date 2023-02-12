let express =  require("express");
let web = express();
web.use(express.static("public"));
web.get("/set/cookie",(req,res)=>{
    // 服务端给客户端设置cookie
    res.cookie("token","123456")
    // console.log(req.cookies.token)
    // res.clearCookie("token")
    res.send("设置成功")
})
web.listen(8080,function(){
    console.log("服务端已启动")
})