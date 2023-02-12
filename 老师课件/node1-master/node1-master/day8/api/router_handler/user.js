// 导入数据库模块
const db = require("../db/index.js");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config");

// 注册新用户的处理函数
module.exports.register = (req, res) => {
  // 接收表单数据
  const userinfo = req.body;
  //   // 判断数据是否合法
  //   if (!userinfo.username || !userinfo.password) {
  //     // return res.send({ status: 1, message: "用于名或密码不合法" });
  //     return res.cc("用于名或密码不合法");
  //   }

  // 定义 sql 语句
  const sqlStr = "select * from user where username = ?";

  db.query(sqlStr, userinfo.username, (err, result) => {
    // 执行 SQL 语句失败
    if (err) {
      //   return res.send({ status: 1, message: err.message });
      return res.cc(err.message);
    }
    // 判断用户名是否被占用
    if (result.length > 0) {
      //   return res.send({ status: 1, message: "用户名被占用，请更换其它用户名" });
      return res.cc("用户名被占用，请更换其它用户名");
    }
    // todo: 用户名可以使用
    userinfo.password = bcrypt.hashSync(userinfo.password, 10);
    // console.log(userinfo.password);
    const sql = "insert into user set ?";
    db.query(
      sql,
      { username: userinfo.username, password: userinfo.password },
      (err, result) => {
        // 判断 SQL 执行失败
        if (err) {
          return res.send({ status: 1, message: err.message });
        }
        // 判断影响行数是否为 1
        if (result.affectedRows != 1) {
          //   return res.send({ status: 1, message: "注册用户失败,请求后再试" });
          return res.cc("注册用户失败,请求后再试");
        }
        // 注册用户成功
        // res.send({ stauts: 0, message: "注册成功" });
        res.cc("注册成功", 0);
      }
    );
  });
};

// 登录的处理函数
module.exports.login = (req, res) => {
  const userinfo = req.body;
  const sql = `select * from user where username = ?`;
  db.query(sql, userinfo.username, (err, result) => {
    // 执行 SQL 语句失败
    if (err) {
      return res.cc(err);
    }
    // 执行 SQL 语句成功，但是获取到的数据条数不等于1
    if (result.length != 1) {
      return res.cc("登录失败");
    }
    // todo: 判断密码是否正确
    const flag = bcrypt.compareSync(userinfo.password, result[0].password);
    if (!flag) {
      return res.cc("登录失败，密码不一致");
    }

    const user = { ...result, password: "", user_pic: "" };
    const tokenStr = jwt.sign(user, config.jwtSecretKey, {
      expiresIn: config.expiresIn,
    });

    res.send({
      status: 0,
      message: "登录成功",
      token: "Bearer " + tokenStr,
    });
  });
};
