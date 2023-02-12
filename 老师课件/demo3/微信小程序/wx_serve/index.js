let express = require("express");
let axios = require("axios");
let app = express();
let appid = "wx056ec15e42bbeffb";
let AppSecret = 'a59faf53e3c0356fd533ea00a77cdcc2'
let userMsg = []
app.get("/userlogin",(req,res)=>{
    //获取前端传递的参数code
    let code = req.query.code
    axios.get(`https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${AppSecret}&js_code=${code}&grant_type=authorization_code`).then(result=>{
        let token = '1234567';
        result.data.token = token;
        userMsg.push(result.data)
        res.send({code:0,msg:"登录成功",data:{token:token}})
    })
})
app.get("/get/openid",(req,res)=>{
        let token = req.query.token;
        let index = userMsg.findIndex((item)=>{
            return item.token === token;
        })
        res.send(userMsg[index])
})
app.listen(3000,()=>{
    console.log("微信小程序服务端已开启～～～")
})