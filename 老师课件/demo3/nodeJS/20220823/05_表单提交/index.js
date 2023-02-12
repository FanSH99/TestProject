let express = require("express");
// 引入bodyparser模块儿 用来解析post请求参数
let bodyParser = require("body-parser")
// 创建应用实例
let app = express();
// 使用静态资源文件夹
app.use(express.static("public"));
// 使用bodyparser模块儿解析post请求参数
app.use(bodyParser.urlencoded({extended:true}));
// 定义get请求接口
app.get("/login",(req,res)=>{
    console.log(req)
    // req request 请求体
    // res response 响应体
    // 获取前端get请求参数 req.query.names  req.query.password
    console.log(req.query)
    console.log(req.query.username)
    console.log(req.query.password)
    console.log("表单提交了")
    res.send(`恭喜用户${req.query.username}提交成功`)
})

// 定义post请求接口
app.post("/user/like",(req,res)=>{
    console.log("post请求进来了")
 //  使用req.body获取post请求传递参数
    console.log(req.body)
    console.log(req.body.like)
    res.send("请求成功")
 })
 

app.listen(8080,function(){
    console.log("服务器已启动")
})
