let express = require("express");

let app = express();
let mysql = require("mysql");



let db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: 'nodemysql'
})

db.connect((err) => {
    if (err) throw err;
    console.log("数据库连接成功");
})

app.get("/created/db", (req, res) => {
    let sql = "create database if not exists nodemysql ";
    db.query(sql, (err, data) => {
        if (err) {
            console.log("数据库创建失败", err);
        } else {
            console.log(data);
            console.log("数据库创建成功");
            res.send("数据库创建成功")
        }
    })
})

app.get("/created/table/post", (req, res) => {
    let sql = "create table if not exists posts(uid int auto_increment,uname varchar(30),pwd varchar(30),primary key(uid)) ";
    db.query(sql, (err, data) => {
        if (err) {
            console.log("数据表创建失败", err);
            res.send("数据表创建失败", err)
        } else {
            console.log(data, "数据表创建成功");
            res.send("数据表创建成功")
        }
    })
})

app.get("/add/post", (req, res) => {
    let post = { uname: "白浅", pwd: "123456" };
    let sql = "insert into posts set ?";
    db.query(sql, post, (err, data) => {
        if (err) {
            console.log(err, "数据添加失败");
            res.send(err, "数据添加失败");
        } else {
            console.log(data, "数据添加成功");
            res.send("数据添加成功")
        }
    })

})

app.get("/getposts", (req, res) => {
    let sql = "select * from posts";
    db.query(sql, (err, data) => {
        if (err) {
            console.log(err, "信息查询失败");
        } else {
            console.log(data, "信息查询成功");
            // res.send("数据查询成功")
            res.json(data);
        }
    })
})

app.get("/updatepost/:uid", (req, res) => {
    let newName = "花千骨";
    console.log(req.params.uid);
    let sql = `update posts set uname="${newName}" where uid=${req.params.uid}`;
    db.query(sql, (err, data) => {
        if (err) {
            console.log(err, "数据修改失败");
        } else {
            console.log(data, "数据修改成功");
            res.send(` ${req.params.uid} 修改成功`)
        }
    })
})

app.get("/deletepost/:id", (req, res) => {
    let sql = `delete from posts where uid=${req.params.id}`;
    db.query(sql, (err, data) => {
        if (err) {
            console.log(err, "数据删除失败");
        } else {
            console.log(data, "数据删除成功");
            res.send("删除成功")
        }
    })
})
app.listen(8000, () => {
    console.log("服务器端口8000已开启-----");
})