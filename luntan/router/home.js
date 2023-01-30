let express = require("express");
let router = express.Router();
let { writeFun, readFun } = require("../tools/writeReadFun");
let makeToken = require("../tools/makeToken.js");
const { map } = require("../bin/app");

router.post("/homeMsg", async (req, res) => {
    try {
        let data0 = await readFun("./data/msg.json");
        data0 = JSON.parse(data0);
        let data = data0.reverse();
        let homeData = data.filter((item, index) => {
            return item.username == req.body.username;
        })
        let length = homeData.length;
        // console.log(data);
        let userData = await readFun("./data/user.json");
        userData = JSON.parse(userData);
        let index = userData.findIndex(item => item.username == req.body.username);
        let img_url = userData[index].img_url;
        res.send({ code: 0, msg: `共${length}篇`, img_url, homeData })
    } catch {
        res.send({ code: 1, msg: "查看失败" })
    }
})

router.post("/search/delMsg", async (req, res) => {
    try {
        let data0 = await readFun("./data/del.json");
        data0 = JSON.parse(data0);
        let data = data0.reverse();
        let delData = data.filter((item, index) => {
            return item.username == req.body.username;
        })
        let length = delData.length;
        console.log(delData);
        console.log(req.body.username);
        res.send({ code: 0, msg: `共${length}篇`, delData })
    } catch {
        res.send({ code: 1, msg: "查看失败" })
    }
})
module.exports = router;