let express = require("express");
let router = express.Router();
let { writeFun, readFun } = require("../tools/writeReadFun");
let makeToken = require("../tools/makeToken")


let tokenState = [];
// 用户登录
router.post("/user/login", async (req, res) => {
    let data = await readFun("./data/user.json");
    data = JSON.parse(data);
    if (data.length == 0) {
        res.send({ code: 1, msg: "请您先去注册" })
        return
    }
    let index = data.findIndex((item) => item.username == req.body.username);
    if (index == -1) {
        res.send({ code: 1, msg: "请您先去注册" })
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
        res.send({ code: 0, msg: "登录成功" })
        return
    }
    res.send({ code: 1, msg: "密码不正确" })

})

// 判断用户是否登录
router.get("/islogin", async (req, res) => {
    // 获取cookie中携带的token
    let token = req.cookies.token;
    let index = tokenState.findIndex(item => item.token == token);
    if (index == -1) {
        res.send({ code: 1, msg: "未登录" })
    } else {
        // 获取当前登录的用户名
        let username = tokenState[index].username;
        // 读取当前用户列表，根据当前登录用户名查询当前用户的头像
        let data = await readFun("./data/user.json");
        data = JSON.parse(data);
        let i = data.findIndex(item => item.username == username);
        // 根据索引获取当前用户头像地址
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