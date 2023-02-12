// 引入express 模块儿
// 在nodejs中require导入模块儿 会默认先从当前文件夹中node_mpdules中查询 如果查不不到就会给node内置模块儿查询
let express = require("express");
// console.log(express)
// 创建应用实例
let App = express();
// console.log(App)
// 注册中间件(使用静态资源文件夹)
// 当使用了静态资源文件夹之后那么我们得web服务就可以访问静态资源文件夹中得所有静态资源
App.use(express.static("public"))
// 默认访问静态资源文件夹下面得index.html
// 定义get请求接口 参数一访问地址 参数二:访问成功得回调函数
App.get("/user",(req,res)=>{
    // req request 请求 请求体
    // res response 响应 响应体
     console.log("收到前端请求啦")
    // 向客户端响应数据
     res.send("哈哈哈,前后端通了")
})
// 监听端口
App.listen(8080,function(){
    console.log("web服务启动成功")
})
// 127.0.0.1:8080  locahost:8080  电脑ip:8080