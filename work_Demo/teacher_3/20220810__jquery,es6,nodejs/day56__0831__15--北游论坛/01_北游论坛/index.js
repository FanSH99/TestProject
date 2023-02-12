let app = require("./bin/app")
app.use(require("./router/user"))
app.use(require("./router/upload"))
app.use(require("./router/msg"))

app.listen(8080,function(){
    console.log("服务端已启动")
})