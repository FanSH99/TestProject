let web  = require("./www/index");
// 导入登录模块儿路由
let login = require("./router/login/index");
// 使用login 模块儿路由
web.use(login);
web.use(require("./router/home/index"))
web.use(require("./router/user/index"))
web.listen(8080,function(){
console.log("nodejs服务已启动~~~~~")
})