let express = require("express");
// 引入 第三方模块儿用户发送邮件
let nodemailer = require("nodemailer");
let app = express();
app.use(express.static("public"));
// 配置nodemeailer
let emailConfig = {
    // 主机地址
    host:"smtp.qq.com",
    port:25,
    // 授权发送邮箱
    auth:{
        // 您的邮箱
        user:"1350219943@qq.com",
        // 您的授权码
        pass:"kpjrdzktgahxhhda"
    }
}
// 使用配置信息
let postEmail = nodemailer.createTransport(emailConfig);
app.get("/send/email",(req,res)=>{
    // 获取 目的邮箱
    let email = req.query.email;
    let content = req.query.content;
    console.log("11111111111")
    postEmail.sendMail({
        // 从哪个邮箱发送的必须为授权邮箱
        from:"1350219943@qq.com",
        // 发送到哪个邮箱
        to:email,
        // 邮件标题
        subject:"北游教育入职offer",
        // 发送的内容
        html:`恭喜您成功入职${content}点击链接<a href=https://www.baidu.com>https://www.baidu.com</a>`
    },()=>{
        res.send("发送邮件成功")
    })
})
app.listen(8080,function(){
    console.log("running.......")
})