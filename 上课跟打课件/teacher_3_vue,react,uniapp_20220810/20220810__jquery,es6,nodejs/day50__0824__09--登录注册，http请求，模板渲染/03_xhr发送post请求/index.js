/* 2022年8月24日14:10:54 */

let express = require("express");

let fs = require("fs");
let bodyParser = require("body-parser");

let web = express();
web.use(bodyParser.urlencoded({ extended: true }))

web.use(express.static("public"));

web.post("/hot/movie", (req, res) => {
    // 获取post请求传递的参数。
    let { type, name } = req.body;
    console.log(type, name);
    fs.readFile("movie.json", (err, data) => {
        if (err) {
            res.send("请求失败")
        } else {
            if (type == "hot") {
                res.send(JSON.parse(data).data.hot);
                return;
            }
            res.send(data);
        }
    })
    // res.send("请求成功");
})

web.listen(8080, () => {
    console.log("服务器已启动！！！");
})