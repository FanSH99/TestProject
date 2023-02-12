/* 
1.监听 GET 请求
   通过 app.get() 方法，可以监听客户端的 GET 请求
   语法：
       app.get('请求URL',function(req,res)){
         // 处理函数
       });
       参数1：客户端的请求 URL 地址
       参数2：请求对应的处理函数
              req: 请求对象(包含了与请求相关的属性和方法)
              res: 响应对象(包含了与响应相关的属性和方法)

              本质都是对 http 协议的封装

2.监听 POST 请求
   通过 app.post() 方法，可以监听客户端的 POST 请求
   语法：
       app.post('请求URL',function(req,res)){
         // 处理函数
       });
       参数1：客户端的请求 URL 地址
       参数2：请求对应的处理函数
              req: 请求对象(包含了与请求相关的属性和方法)
              res: 响应对象(包含了与响应相关的属性和方法)
              
              本质都是对 http 协议的封装              

3.把内容响应给客户端
     通过 res.send() 方法，把处理好的内容发送给客户端
     语法：
         app.get('/user',(req,res) => {
            // 向客户端发送 JSON 对象
            res.send({name:'张三',age:22,sex:'男'});
         });

         app.get('/user',(req,res) => {
            // 向客户端发送 文本内容
            res.send('success'});
         });  
*/
const express = require("express");

const app = express();

// 1. get 请求测试
app.get("/user", (req, res) => {
  let hero = {
    name: "剑圣",
    skill: "无敌斩",
    level: 50,
  };
  res.send(hero);
});

// 2. post 请求测试
app.post("/user", (req, res) => {
  res.send("请求成功");
});

/* 
4.获取 url 中携带的查询参数
    通过 req.query 对象，可以访问到客户端通过查询字符串的形式，发送到服务器的参数
    语法：
        app.get('/user',(req,res) => {
            // req.query 默认是一个空对象
            // 客户端使用 ?name=zs&age=20 查询字符串形式，发送到服务器的参数
            // 可以通过 req.query 对象访问到，例如：
            // req.query.name  req.query.age
            console.log(req.query);
         });
*/
// 路径传参
app.get("/hero", (req, res) => {
  let query = req.query;
  console.log(query);
  console.log(typeof query);  // 返回的是一个对象
  res.send(query);
});

/* 
5.获取 URL 中动态参数
   通过 req.params 对象，可以访问到 URL 中，通过 : 匹配到的动态参数
   app.get('/user/:id', (req, res) => {
       // req.params 默认是一个空对象
       // 里面存放着 :id (占位符) 匹配到动态参数值
      //  id 是 key 
       console.log(req.params);
   });

*/
// 动态传参(占位符)
app.get("/list/:id/:age", (req, res) => {
  // 默认也是空对象
  console.log(req.params);
  res.send(params);
});

// 启动服务器
app.listen(8080, () => {
  console.log("express 服务已启动, 172.0.0.1:8080");
});
