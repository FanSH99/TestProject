let express = require("express");
let web = express();
let bodyParser  = require("body-parser");
web.use(bodyParser.urlencoded({extended:true}))
web.use(express.static("public"));

web.get("/login",(req,res)=>{
    let {username,password} = req.query;
    res.send({code:0,data:username+"登录成功"})
})

web.post("/regiest",(req,res)=>{
    let {username,pasword} = req.body;
    res.send({code:0,msg:"注册成功",data:username})
})

web.listen(8080,function(){
    console.log("服务端以启动")
})