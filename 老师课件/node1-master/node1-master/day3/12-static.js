/* 
静态资源：HTML, CSS, JavaScript, 图片等,不怎么变化的资源。
        比如淘宝的网页基本结构，上面是导航栏和搜索框，下面是商品。
动态资源: 变化的资源。比如每个人登录淘宝，购物车和订单记录不一样。

服务器：提供服务的机器。比如：游戏服务器，淘宝服务器。

举例：查看购物车：
    1. 浏览器向服务器发起请求，携带一定的参数。
    2. 服务器向数据库检索，组装数据。
    3. 服务器把处理好的数据，响应给浏览器。
    4. 浏览器把数据渲染到页面。

本质都是对 HTTP 协议的操作。
    用户是食客，
    浏览器是厨师，
    HTTP 就是自动买菜的小车，
        固定的格式和数据，比如菜单，余额，支付方式，购买人，收货地等。
        HTTP 有好多固定的键值对。
    服务器就是超市
        通过自动买菜车携带的数据，进行不同的操作。
        主要是根据不同的请求参数(菜单),再把菜安装自动买菜车的固定格式摆放。
    req 和 res 本质都是对 http 协议的操作。    
*/

/* 

托管静态资源(js, h5, css3):
    express 通过 static() 方法，可以快速创建一个静态资源服务器。
    语法：
        app.use(express.static('public));
    现在就可以访问 public 目录下的所有文件了：
        http://localhost:8080/star.png
        http://localhost:8080/index.css
        http://localhost:8080/index.html

    注意：public 默认省略
    其它：
        1. 可以托管多个静态资源目录
        2. 资源同名时(star.png)，查找资源的顺序是从上往下   
        3. 参数1，挂载路径前缀(指定上下文)
            http://127.0.0.1:8080/pic/eason.png
*/
const express = require("express");

const app = express();

// 多个静态资源，且有重名
// app.use(express.static("./files"));
app.use(express.static("./public"));
app.use(express.static("./files"));

// 挂载路径前缀
app.use("/pic", express.static("./picture"));

app.listen(8080, () => {
  console.log("express 服务器已启动, 127.0.0.1:8080");
});
