// 2022年8月26日14:11:30

let web = require("./www/index");
// 导入登录模块路由。
let login = require("./router/login/index");
// router不能直接使用，需要进行注册
web.use(login);
console.log(login);
web.use(require("./router/home/index"))
web.use(require("./router/user/index"))
web.listen(8080, () => {
    console.log("nodejs服务已启动~~~~");
})


/* 
技术栈

前端：CSS，html。jquery  ajax template  js es6
后端：nodejs fs path express cookie-parser  body-parser router

*/