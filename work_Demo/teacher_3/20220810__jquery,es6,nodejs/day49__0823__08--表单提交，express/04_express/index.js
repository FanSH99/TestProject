/* 
2022年8月23日10:46:54
*/


// 引入express  ---默认会先从当前文件夹的node_modules中找，如果找不到就会从nodejs的内置模块中查询
let express = require("express");
console.log(express);

// express()    创建应用实例。
let app = express();
console.log(app);

// use() 注册中间键 static---使用静态资源文件夹。
// 当使用了静态资源文件夹之后，web服务就可以访问静态资源文件夹中的所有静态资源。默认会进入index文件
// 如果想进入其他页面，需要在添加页面名称例如 在浏览器中输入localhost:8080进入index 输入localhost:8080/login.html进入login
app.use(express.static("public"))


// 请求方式 get ,delete,push,post
// 定义get请求接口路由。--前端叫接口。  ---参数1：访问地址  参数2：访问成功的回调函数


app.get("/user", (req, res) => {
    // req  request 请求，请求的数据放在这里
    // res response 响应。响应体。
    console.log("收到前端请求啦");
    // 向客服端响应数据
    res.send("哈哈哈，返回的数据")
})
/* 
本机访问有3种
1.http:127.0.0.1:8080
2.localhost:8080
3.电脑id:8080  ---需要用管理员身份登录cmd 
*/


// 监听端口 listen ,参数1：端口号 app.listen一般写到最后
app.listen(8080, function () {
    console.log("web服务启动成功");
})//Connot GET/ 访问到了但是没有数据


