/* 2022年9月1日11:09:38 */
let express = require("express");
/* 引入第三方模块发送邮件 */
let nodemailer = require("nodemailer");
let web = express();


web.use(express.static("public"));

let emailConfig = {
    // 主机地址
    host: "smtp.qq.com",
    port: 25,
    auth: {
        // 您的邮箱
        user: "2931085467@qq.com",
        // 您的授权码
        pass: "mzieyjvlyqcedcgh"
    }

}

// 使用配置信息

let postEmail = nodemailer.createTransport(emailConfig);
web.get("/sendemail", (req, res) => {
    let email = req.query.email;
    let content = req.query.content;
    console.log(email, content);
    postEmail.sendMail({
        // 发送的邮箱
        from: "2931085467@qq.com",
        // 发送到的邮箱
        to: email,
        // 邮件标题
        subject: "发送邮件测试：",
        // 内容
        html: `如果收到表示测试成功，邮件内容${content}点击链接<a href=https://www.baidu.com>https://www.baidu.com</a>`
    }, () => {
        res.send("发送邮件成功")
    })
})
web.listen(8080, () => {
    console.log("服务端已开启，端口号为localhost:8080~~~~~~");
})

/* 打开邮箱，设置--账户--POP3--开启服务IMAP/SMTP--验证密码--短信验证发送后开启--我已发送-- */