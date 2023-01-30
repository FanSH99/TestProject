let app = require("./bin/app")

app.use(require("./router/login"));
app.use(require("./router/regist"));
app.use(require("./router/upload"));
app.use(require("./router/adMsg"));
app.use(require("./router/adComment"));
app.use(require("./router/home"));
app.use(require("./router/search"))
app.listen(8080, function () {
    console.log("服务端已启动~~~~")
})