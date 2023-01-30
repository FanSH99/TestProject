let express = require("express");
let fs = require("fs");
let user = require("./data/user.json");
console.log(user);
let app = express();
app.use(express.static("public"));

app.get("/login/user", (req, res) => {
    // console.log(req);
    // console.log(req.query.uname);
    // console.log(req.query.pwd);
    let uname = req.query.uname;
    let pwd = req.query.pwd;
    if (uname == "" || pwd == "") {
        res.send("用户名或密码不能为空！！！")
        return;
    }
    user.map((item, index) => {
        // console.log(index, item.uname, item.pwd, item.sex);
        // console.log(uname, pwd);
        if (item.uname == uname && item.pwd == pwd) {
            res.send(`<h1>登录成功</h1><br>欢迎<i>${item.uname}</i>来到你的主页！！！`)
            return;
        } else if (item.uname != uname) {
            res.send("用户名不存在，如果没有账号请先进行注册")
            return;
        } else {
            res.send("用户名或密码错误")
        }
    })
    return;
})

app.get("/register/user", (req, res) => {
    // console.log(req);
    let uname = req.query.uname;
    let pwd = req.query.pwd;
    let sex = req.query.sex;
    let flag = 0;
    user.map(item => {
        if (item.uname == uname) {
            flag = 1;
        }
    })
    if (uname == "" || pwd == "") {
        res.send("用户名或密码不能为空！！！")
    } else if (flag == 1) {
        res.send("用户名已经存在")
    } else if (pwd.length < 6 || pwd.length > 12) {
        res.send("密码必须在6-12位之间（包括6或12位）")
    } else if (uname.length < 2 || uname.length > 10) {
        res.send("用户名必须在2-10位之间（包括2或10位）")
    } else {
        let obj = {};
        obj.uname = uname;
        obj.pwd = pwd;
        obj.sex = sex;
        // console.log(obj);
        user.push(obj);
        fs.writeFile("./data/user.json", JSON.stringify(user), (err) => {
            if (err) return err;
            console.log("写入成功");
            res.send(`<h1>注册成功,你的用户名为${uname},你的密码为${pwd},请返回登录<h1>`);
        });
    }
})

app.listen(8080, () => {
    console.log("服务器端口已经开启！！");
})

