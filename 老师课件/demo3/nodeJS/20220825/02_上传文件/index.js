let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");
// 引入multer模块儿用来解析文件
let multer = require("multer");
let index = 0;
let filename = '';
// 配置multer 上传地址 文件名称 disk磁盘 storage 存储
let multerConfig = multer.diskStorage({
    // 配置文件存储的位置 destination 目地地
    destination:"./public/file",
    // 定义文件名称
    filename:(req,file,callback)=>{
        index++
        // req 请求体
        // file 原文件信息
        console.log(file)
        // 获取文件后缀 originalname 源文件名称
        let type = path.extname(file.originalname)
        let newFilename = index +type
        
        filename = newFilename;
        // 将新的文件名称返回
        callback(null,newFilename)
    }
})
// 使用配置信息
let upload = multer({storage:multerConfig});
let web = express();
web.use(express.static("public"));
web.use(bodyParser.urlencoded({extended:true}));

//  使用multer来解析文件对象single单一的
web.post("/upload",upload.single("myfile"),(req,res)=>{
    res.send(`<img src=http://localhost:8080/file/${filename}></img>`)
})

web.listen(8080,function(){
    console.log("服务端已启动......")
})

/* 
上传文件流程:
1. 下载multer模块儿用于解析文件
2. 引入multer模块儿
3. 配置multer,设置上传文件位置以及文件的名称
4. 使用multer配置
5. 将配置好的multer与接口结合最终解析文件

*/