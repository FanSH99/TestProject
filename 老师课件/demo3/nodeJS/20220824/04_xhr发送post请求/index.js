let express = require("express");
let fs = require("fs");
let bodyParser = require("body-parser");
let web = express();
web.use(bodyParser.urlencoded({extended:true}));
web.use(express.static("public"));

web.post("/get/list",(req,res)=>{
    // 获取post请求传递得参数
    let {type,name} = req.body;
    console.log(type,name)
    // console.log(r)
    fs.readFile("move.json",(err,data)=>{
        if(err){
            res.send("请求失败")
        }else{
            if(type == 'hot'){
                // console.log()
                res.send(JSON.parse(data).data.hot)
                return
            }
           res.send(data)
        }
    })
})

web.listen(8080,()=>{
    console.log("服务器已启动")
})