let express = require("express");
let router = express.Router();
let { writeFun, readFun } = require("../tools/writeReadFun");
let makeToken = require("../tools/makeToken.js")

router.post("/adComment", async (req, res) => {
    try {
        // console.log(req.body);
        // req.body;
        let data = await readFun("./data/msg.json");
        data = JSON.parse(data);
        let index = req.body.index;
        let i = data.findIndex((item) => item["dataIndex"] == index);
        // console.log(index);
        data[i].comment.push(req.body);
        // console.log(data);
        let result = await writeFun("./data/msg.json", JSON.stringify(data));
        res.send({ code: 0, msg: "评论成功" });
        return
    } catch {
        res.send({ code: 1, msg: "评论失败" });
    }
})


module.exports = router;