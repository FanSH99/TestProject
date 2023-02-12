/* 2022年8月24日15:35:15 */
let express = require("express");
let bodyParser = require("body-parser");
let web = express();
console.log(bodyParser);
web.use(bodyParser.urlencoded({ extended: true }))


web.use(express.static("public"));

web.get("/login", (req, res) => {
    let { uname, pwd } = req.query;
    res.send({ code: 0, data: `${uname}登陆成功` })
})

web.post("/register", (req, res) => {
    let { uname, pwd } = req.body;
    console.log(uname, pwd);
    res.send({ code: 0, msg: `${uname}注册成功！` })
})

web.listen(8080, () => {
    console.log("服务端已启动！！");
})