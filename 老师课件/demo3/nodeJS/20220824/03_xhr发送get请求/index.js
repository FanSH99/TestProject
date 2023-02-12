let express = require("express");
let web = express();
web.use(express.static("public"));

web.get("/hot/move",(req,res)=>{
    // 获取get请求传递得参数
    console.log(req.query)
    if(req.query.mytype == 2){
        res.send({
            url:"//p0.pipi.cn/mmdb/25bfd633be1923f0eeb860cd113501ca2f7f5.jpg?imageMogr2/thumbnail/2500x2500%3E?imageView2/1/w/128/h/180",
            name:"世界上最爱我的人"
        })
        return
    }
    res.send({
        url:"//p0.pipi.cn/mmdb/25bfd63302f0fa395b07accde068bfd3c361f.jpg?imageMogr2/thumbnail/2500x2500%3E?imageView2/1/w/128/h/180",
        name:"明日战记"
    })
})
web.listen(9090,()=>{
    console.log("web服务已启动...........")
})