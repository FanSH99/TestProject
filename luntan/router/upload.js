let express = require("express");
let router = express.Router();
let { writeFun, readFun } = require("../tools/writeReadFun");

let multer = require("multer");
let path = require("path")
// 定义新的文件名称
let newFilename;
// 配置文件上传信息
let multerConfig = multer.diskStorage({
    destination: "./public/img/user",
    filename: (req, file, callback) => {
        // 获取文件后缀
        let type = path.extname(file.originalname);
        // 获取当前用户名
        let username = req.body.username;
        newFilename = username + type;
        callback(null, newFilename)
    }
})
// 使用配置信息;
let upload = multer({ storage: multerConfig });
// 用户上传头像
router.post("/user/upload", upload.single("myphoto"), async (req, res) => {
    // 读取用户信息列表 根据当前登录的用户名 获取当前的用户信息对象
    let data = await readFun("./data/user.json");
    data = JSON.parse(data);
    let index = data.findIndex(item => item.username == req.body.username);
    data[index].img_url = './img/user/' + newFilename;
    await writeFun("./data/user.json", JSON.stringify(data))
    let msgData = await readFun("./data/msg.json");
    msgData = JSON.parse(msgData);
    msgData.forEach((item, index) => {
        if (item.username == req.body.username) {
            item.img_url = './img/user/' + newFilename;
        }
        let list = item.comment;
        if (list.length > 0) {
            list.forEach(item1 => {
                if (item1.commentName == req.body.username) {
                    item1.commentImgUrl = './img/user/' + newFilename;
                }
            })

        }
    });
    await writeFun("./data/msg.json", JSON.stringify(msgData))
    let delData = await readFun("./data/del.json");
    delData = JSON.parse(delData);
    delData.forEach((delitem, delindex) => {
        if (delitem.username == req.body.username) {
            delitem.img_url = './img/user/' + newFilename;
        }
        let list2 = delitem.comment;
        if (list2.length > 0) {
            list2.forEach(item2 => {
                if (item2.commentName == req.body.username) {
                    item2.commentImgUrl = './img/user/' + newFilename;
                }
            })

        }
    });
    await writeFun("./data/del.json", JSON.stringify(delData))
    res.send({ code: 0, msg: "上传成功" })
})

module.exports = router;