let express = require("express");
let router = express.Router();
let { writeFun, readFun } = require("../tools/writeReadFun");
let makeToken = require("../tools/makeToken.js")
// 用户注册
router.post("/user/regiest", async (req, res) => {
    // 先获取前端传递过来的用户信息
    req.body;
    // 读取user.json中数据判断当前用户是否已存在user.json 若存在则表示已注册若不存在则表示未注册 在将数据写入；
    let data = await readFun("./data/user.json");
    data = JSON.parse(data);
    //判断当前数组是否为空若为空则证明没有任何用户注册
    if (data.length == 0) {
        // 将用户注册信息添加到空数组中
        data.push(req.body);
        let msg = await writeFun("./data/user.json", JSON.stringify(data));
        res.send({ code: 0, msg: "注册成功" })
        return
    }
    // 判断当前用户是否已注册
    let index = data.findIndex(item => item.username === req.body.username);
    if (index == -1) {
        data.push(req.body);
        let msg = await writeFun("./data/user.json", JSON.stringify(data));
        res.send({ code: 0, msg: "注册成功" })
    } else {
        res.send({ code: 1, msg: "该用户已注册" })
    }
})
let tokenState = [];
// 用户登录
router.post("/user/login", async (req, res) => {
    let data = await readFun("./data/user.json");
    data = JSON.parse(data);
    if (data.length == 0) {
        res.send({
            code: 1,
            msg: "请您先去注册"
        })
        return
    }
    let index = data.findIndex((item) => item.username == req.body.username);
    if (index == -1) {
        res.send({
            code: 1,
            msg: "请您先去注册"
        })
        return
    }
    if (req.body.username == data[index].username && req.body.password == data[index].password) {
        // 生成token
        let token = makeToken();
        // 将token于当前用户绑定
        let user = {
            token: token,
            username: req.body.username
        }
        tokenState.push(user)
        // 给客户端设置token
        res.cookie("token", token)
        res.send({
            code: 0,
            msg: "登录成功"
        })
        return
    }
    res.send({
        code: 1,
        msg: "密码不正确"
    })

})

// 判断用户是否登录
router.get("/islogin", (req, res) => {
    // 获取cookie中携带的token
    let token = req.cookies.token;
    let index = tokenState.findIndex(item => item.token == token);
    if (index == -1) {
        res.send({ code: 1, msg: "未登录" })
    } else {
        let username = tokenState[index].username;
        let data = await readFun("./data/user.json");
        data = JSON.parse(data);
        let i = data.findIndex(item => item.username == username)
        let img_url = data[i].img_url;
        res.send({ code: 0, msg: "已登录", data: { username, img_url } })
    }
})

// 退出登录
router.get("/outLogin", (req, res) => {
    let token = req.cookies.token;
    res.clearCookie("token");
    let index = tokenState.findIndex(item => item.token == token);
    tokenState.splice(index, 1);
    res.send({ code: 0, msg: '退出成功' })
})
module.exports = router;