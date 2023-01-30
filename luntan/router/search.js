let express = require("express");
let router = express.Router();
let { writeFun, readFun } = require("../tools/writeReadFun");
let makeToken = require("../tools/makeToken.js");
const { map } = require("../bin/app");

router.get("/searchMsg", async (req, res) => {

    try {
        let type = req.query.type;
        let value = req.query.value;
        let data0 = await readFun("./data/msg.json");
        data0 = JSON.parse(data0);
        let data = data0.reverse();
        let searchData = [];
        data.forEach((item, index) => {
            let msg = item.talk;
            let name = item.username;
            let comment = item.comment;
            if (type == "msg") {
                if (msg.includes(value)) {
                    searchData.push(item);
                }
            } else if (type == "name") {
                if (name.includes(value)) {
                    searchData.push(item);
                };
            } else if (type == "comment") {
                let str = comment.tostr;
                if (str.includes(value)) {
                    searchData.push(item);
                }
            } else {
                if (msg.includes(value) || name.includes(value) || comment.includes(value)) {
                    searchData.push(item);
                }
            }
        }
        )
        let length = searchData.length;
        res.send({ code: 0, msg: `共${length}篇`, searchData })
    } catch {
        res.send({ code: 1, msg: "搜索失败" })
    }

})

module.exports = router;