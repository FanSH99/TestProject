/* 2022年8月25日14:55:15 */

let express = require("express");
let bodyParser = require("body-parser");
let path = require("path")
// 引入multer 
let multer = require("multer");

// 配置multer 上传地址 文件名称 disk磁盘 storage存储
let index = 0;
let filename = "";
let multerConfig = multer.diskStorage({
    // 配置文件存储的位置
    destination: "./public/file",
    // 配置文件名称，
    filename: (req, file, callback) => {
        // req 请求体 file源文件信息
        index++;
        console.log(file);
        // 获取文件后缀
        let type = path.extname(file.originalname);
        console.log(type);
        let newFilename = index + type;
        filename = newFilename;
        console.log(newFilename);
        callback(null, newFilename);
    }
})

// 使用配置信息
let upload = multer({ storage: multerConfig });


let web = express();
web.use(express.static("public"));
// 文件比较大，需要用post上传
web.use(bodyParser.urlencoded({ extended: true }));

// 使用multer来解析文件对象  upload.single表示只允许上传一次
web.post("/upload", upload.single("myfile"), (req, res) => {
    res.send(`<img src=http://localhost:8080/file/${filename}>`);
})

web.listen(8080, function () {
    console.log("服务端已启动！！！！");
})

/* 
cc 上传文件的流程！
1.npm下载multer模块儿用于解析文件。
2.引入multer模块
3.配置multer，设置上传文件位置以及文件名称。
4.使用multer配置
5.将配置好的multer与接口结合最终解析文件。

需要注意，
*/
