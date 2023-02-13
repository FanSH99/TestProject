let multer = require("multer");
let path = require("path");
// 定义新的文件名称
let newfilename;
// 配置文件上传信息
let multerconfig = multer.diskStorage({
    destination: "./public/header",
    filename: (req, file, callback) => {
        // 获取文件后缀
        let type = path.extname(file.originalname);
        let username = req.body.username;
        newfilename = username + type;
        callback(null, newfilename);
    }
})

// 使用配置信息
let upload = multer({ storage: multerconfig });

// 导出模块
module.exports = {
    upload,
    newfilename
}