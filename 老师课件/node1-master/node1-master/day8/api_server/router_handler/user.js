// 导入数据库操作模块
const db = require("../db/index.js");
// 导入 bcryptjs 这个包
const bcrypt = require("bcryptjs");

// 导入生成 token 的包
const jwt = require("jsonwebtoken");
// 导入全局的配置文件
const config = require("../config");

// 注册新用户的处理函数
module.exports.register = (req, res) => {
  // 获取客户端提交到服务器的用户信息
  const userinfo = req.body;
  // console.log(userinfo);
  // 判断数据是否合法
  // 6. 替换为 中间件验证
  // if (!userinfo.username || !userinfo.password) {
  //   // return res.send({ status: 1, message: "用于名或密码不合法" });
  //   return res.cc("用于名或密码不合法");
  // }

  // 定义 SQL 语句，查询用户名是否被占用
  const sqlStr = "select * from user where username=?";

  db.query(sqlStr, userinfo.username, (err, result) => {
    // 执行 SQL 语句失败
    if (err) {
      // return res.send({ status: 1, message: err.message });
      return res.cc(err);
    }
    // 判断用户名是否被占用
    if (result.length > 0) {
      // return res.send({ status: 1, message: "用户名被占用，请更换其它用户名" });
      return res.cc("用户名被占用，请更换其它用户名");
    }
    // todo: 用户名可以使用
    // console.log(userinfo);
    // 加密: 参数2 是随机盐长度，一般是 10
    userinfo.password = bcrypt.hashSync(userinfo.password, 10);
    // console.log(userinfo);

    // 定义插入用户的 SQL 语句
    const sql = "insert into user set ?";
    // 调用 db.query() 执行 SQL 语句
    db.query(
      sql,
      { username: userinfo.username, password: userinfo.password },
      (err, result) => {
        // 判断 SQL 执行失败
        if (err) {
          // return res.send({ status: 1, message: err.message });
          return res.cc(err);
        }
        // 判断影响行数是否为1
        if (result.affectedRows != 1) {
          // return res.send({ status: 1, message: "注册用户失败,请求后再试" });
          return res.cc("注册用户失败,请求后再试");
        }
        // 注册用户成功
        // res.send({ stauts: 0, message: "注册成功" });
        return res.cc("注册成功", 0);
      }
    );
  });
};

// 登录的处理函数
module.exports.login = (req, res) => {
  // 接收表单的数据
  const userinfo = req.body;
  // 定义 SQL 语句
  const sql = `select * from user where username = ?`;
  // 执行 SQL 语句，更具用户名查询用户的信息
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
    // todo : 登录成功，生成 token 字符串
    // 展开后，重新赋值
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
