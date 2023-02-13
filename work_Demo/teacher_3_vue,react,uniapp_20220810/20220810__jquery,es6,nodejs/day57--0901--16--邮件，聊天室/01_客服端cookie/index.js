/* 2022年9月1日09:11:57 */

const { request } = require("express");
let express = require("express");
let web = express();

web.use(express.static("public"));

web.get("/setcookie", (req, res) => {
    // 获取cookie
    console.log(req.headers.cookie);//token=11111;tooken=123456
    // 设置cookie
    res.cookie("tooken", "123456");
    res.clearCookie("token");
    res.send("设置成功！！！")


})

web.listen(8080, () => {
    console.log("服务端已开启，端口号为localhost:8080~~~~~~");
})