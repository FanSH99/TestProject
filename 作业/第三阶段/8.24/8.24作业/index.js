let { writeFun, readFun, delFun } = require("./tools/writeReadFun")
let express = require("express");
let bodyParser = require("body-parser");

let web = express();
console.log(bodyParser);
web.use(bodyParser.urlencoded({ extended: true }))


web.use(express.static("public"));


web.post("/register", async (req, res) => {

    let type = req.body.type;
    console.log(req.body);
    // console.log(uname, age, sex, phone);
    try {

        if (type == 1) {
            let result = await readFun("./user.json");
            result = JSON.parse(result);
            let obj = {};
            obj.uname = req.body.uname;
            obj.age = req.body.age;
            obj.sex = req.body.sex;
            obj.phone = req.body.phone;
            result.push(obj);
            console.log("result", result);
            let data = await writeFun("./user.json", JSON.stringify(result));
            res.send(result);
        } else if (type == 2) {
            let result = await readFun("./user.json");
            result = JSON.parse(result);
            let index = req.body.index;
            result.splice(index, 1);
            console.log("result", result);
            let data = await writeFun("./user.json", JSON.stringify(result));
            res.send(result);
        } else {
            let result = await readFun("./user.json");
            result = JSON.parse(result);
            res.send(result);
        }
        let read = await readFun("./user.json");
        if (read.length == 0) {
            let del = await delFun("./user.json");
        }

    } catch (err) {
        let type = req.body.type;
        console.log(type);
        if (type == 0) {
            res.send("-1");
        } else {
            let obj = {};
            obj.uname = req.body.uname;
            obj.age = req.body.age;
            obj.sex = req.body.sex;
            obj.phone = req.body.phone;
            let data = await writeFun("./user.json", JSON.stringify([obj]));
            if (data == "success") {
                console.log(req.body);
                res.send(obj);
            } else {
                res.send("注册失败！")
            }
        }

    }

    /* res.send({ code: 0, msg: `${uname}注册成功！` }) */
})

web.listen(8080, () => {
    console.log("服务端已启动！！");
})