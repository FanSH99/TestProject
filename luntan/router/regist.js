let express = require("express");
let router = express.Router();
let { writeFun, readFun } = require("../tools/writeReadFun");
let makeToken = require("../tools/makeToken")
// 用户注册
router.post("/user/regiest", async (req, res) => {
    // 先获取前端传递过来的用户信息
    req.body;
    // 读取user.json中数据判断当前用户是否已存在user.json 若存在则表示已注册若不存在则表示未注册 在将数据写入；
    let data = await readFun("./data/user.json");
    data = JSON.parse(data);
    //判断当前数组是否为空若为空则证明没有任何用户注册
    // if(data.length == 0){
    //     // 将用户注册信息添加到空数组中
    //     data.push(req.body);
    //     let msg  = await writeFun("./data/user.json",JSON.stringify(data));
    //     res.send({code:0,msg:"注册成功"})
    //     return
    // }
    // 判断当前用户是否已注册
    let index = data.findIndex(item => item.username === req.body.username);
    if (index == -1) {
        console.log(req.body)
        // 给用户设置默认头像
        req.body.img_url = "./img/default.png"
        data.push(req.body);
        let msg = await writeFun("./data/user.json", JSON.stringify(data));
        res.send({ code: 0, msg: "注册成功" })
    } else {
        res.send({ code: 1, msg: "该用户已注册" })
    }
})

module.exports = router;