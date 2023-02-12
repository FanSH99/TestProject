let express = require("express");
let router = express.Router();
let {writeFun,readFun} = require("../tools/writeReadFun");

let multer = require("multer");
let path = require("path")
   // 定义新的文件名称
   let newFilename;
   // 配置文件上传信息
   let multerConfig = multer.diskStorage({
       destination: "./public/header",
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
router.post("/user/upload",upload.single("myphoto"), async (req,res)=>{
        // 读取用户信息列表 根据当前登录的用户名 获取当前的用户信息对象
        let data = await readFun("./data/user.json");
        data = JSON.parse(data);
        let index = data.findIndex(item=>item.username == req.body.username);
        data[index].img_url = './header/'+newFilename;
        await writeFun("./data/user.json",JSON.stringify(data))
        // 读取论坛信息列表
        let list = await readFun("./data/msgList.json");
        list = JSON.parse(list);
        list.forEach(item=>{
            if(item.username == req.body.username){
                item.img_url = './header/'+newFilename;
            }
            item.list.forEach(value=>{
                if(value.username == req.body.username){
                    value.img_url =  './header/'+newFilename;
                }
            })
        })
        await writeFun("./data/msgList.json",JSON.stringify(list))
        res.send({
            code:0,
            msg:"上传成功"
        })
})

module.exports = router;