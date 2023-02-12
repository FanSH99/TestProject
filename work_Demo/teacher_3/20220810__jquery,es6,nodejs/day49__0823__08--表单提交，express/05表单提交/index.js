/* 
2022年8月23日14:08:49
*/

let express = require("express");
// 创建应用实例。

let bodyParser = require("body-parser");
console.log("bodyParser", bodyParser);
let app = express();

// 使用静态资源文件夹。
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
// 定义一个get请求

app.get("/login", (req, res) => {
    // req 请求体  res 响应体
    // 获取前端get请求传递的参数
    console.log(req);//req可以或者用户输入的信息。
    console.log(req.query);//{ uname: 'admin', pwd: '123456' }
    console.log(req.query.uname)//admin
    console.log(req.query.pwd);//123456
    console.log("表单提交了！");
    res.send(`恭喜用户${req.query.uname}登录成功！！！`);//恭喜用户admin登录成功！！！
})

// 定义post请求接口
app.post('/user/like', (req, res) => {
    console.log(req);
    console.log("这是一个post请求。");
    // console.log(req.query);//{}  解析不到
    // 使用body-parser解析post参数 ,使用req.body获取传递的参数
    console.log(req.body);
    console.log(req.body.like);
    res.send(`请求成功了，你的性别是${req.body.sex},你喜欢${req.body.like}`);
})
app.listen(8080, () => {
    console.log("服务器已经启动！");
})


/* 
post请求和get请求的区别
1.get请求参数拼接到请求路径上面post请求参数携带在请求体重
2.post请求更安全
3.get请求传递得参数有大小限制，最大不能超过4kb，post请求没有大小限制（所以上传图片通常用post)
4.get请求比post请求更快
5.get请求通常用来做查询。


1b=1024字节
1kb=1024b
1汉字=2字节
1字母=1字节
4kb=1024*1024/2个汉字
*/

