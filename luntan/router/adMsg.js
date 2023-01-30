let express = require("express");
let router = express.Router();
let { writeFun, readFun } = require("../tools/writeReadFun");
let makeToken = require("../tools/makeToken.js");
const { map } = require("../bin/app");

router.post("/adMSg", async (req, res) => {
    try {

        req.body;
        // console.log(req.body);
        let data = await readFun("./data/msg.json");
        data = JSON.parse(data);
        let obj = req.body;
        if (data.length == 0) {
            obj["dataIndex"] = data.length;
        } else {
            let uindex = data[data.length - 1]["dataIndex"] + 1
            obj["dataIndex"] = uindex;
        }
        obj["comment"] = [];
        console.log(obj);
        data.push(obj);
        let result = await writeFun("./data/msg.json", JSON.stringify(data));
        res.send({ code: 0, msg: "发表成功" })
    } catch {
        res.send({ code: 1, msg: "发表失败" })
    }
})

router.post("/isMsg", async (req, res) => {
    let data0 = await readFun("./data/msg.json");
    data0 = JSON.parse(data0);
    let data = data0.reverse();
    res.send({ code: 0, data })
})

router.get("/delMsg", async (req, res) => {
    try {
        let data = await readFun("./data/msg.json");
        let delData = await readFun("./data/del.json");
        data = JSON.parse(data);
        delData = JSON.parse(delData);
        let index = req.query.index;
        let i = data.findIndex((item) => item["dataIndex"] == index);
        let del = data.splice(i, 1);
        delData.push(del[0]);
        let result = await writeFun("./data/msg.json", JSON.stringify(data));
        let result1 = await writeFun("./data/del.json", JSON.stringify(delData));
        res.send({ code: 0, msg: "删除成功" })
    } catch {
        res.send({ code: 1, msg: "删除失败" })
    }


})

module.exports = router;