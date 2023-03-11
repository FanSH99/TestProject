/* 2022年8月24日9:11:08 */

let express = require("express");

// 导入自定义封装的读写模块。
let { writeFun } = require("./tools/writeFun");
let { readFun } = require("./tools/readFun");
let bodyParser = require("body-parser");
let app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/login", async (req, res) => {
    console.log(req, req.body.uname, req.body.pwd);
    // let uname = req.body.uname;
    // let pwd = req.body.pwd;
    let { uname, pwd } = req.body;
    console.log(uname, pwd);
    try {
        if (uname == "" || pwd == "") {
            res.send("用户名或密码不能为空")
        } else {
            let result = await readFun("./user.json");
            result = JSON.parse(result);
            let index = result.findIndex(item => item.uname == uname);
            console.log("index", index);
            if (index == -1) {
                res.send("当前用户未注册，请您先注册");
                return
            }
            console.log(result[index]);
            if (uname == result[index].uname && pwd == result[index].pwd) {
                res.send("恭喜你登录成功！！！")
            } else {
                res.send("用户名或密码错误！！")
            }
        }
    } catch (err) {
        // 暂未有用户注册。
        console.log(err);
        res.send("该用户暂未注册，请先注册。")
    }

})
app.post("/register", async (req, res) => {
    console.log(req.body.uname, req.body.pwd);
    let { uname, pwd } = req.body;
    try {
        if (uname == "" || pwd == "") {
            res.send("用户名或密码不能为空");
        } else if (uname.length < 2 || uname.length > 10) {
            res.send("用户名必须是2-10位")
        } else if (pwd.length < 4 || pwd.length > 12) {
            res.send("密码必须是4-12位");
        } else {
            let result = await readFun("./user.json");
            console.log(result, uname);
            result = JSON.parse(result);
            let index = result.findIndex(item => item.uname == uname)
            console.log("index=", index);
            if (index == -1) {
                // 当前用户未注册，先添加到数据列表中在重新写入。
                result.push(req.body);
                let data = await writeFun("./user.json", JSON.stringify([result]));
                if (data == "success") {
                    res.send("恭喜你注册成功！！");
                } else {
                    res.send("注册失败！")
                }
            } else {
                res.send("你已经注册过了！！！")
            }
        }

    } catch (err) {
        let data = await writeFun("./user.json", JSON.stringify([req.body]));
        if (data == "success") {
            res.send("注册成功！！");
        } else {
            res.send("注册失败！")
        }
    }
})

app.listen(8080, () => {
    console.log("web服务器已开启");
})


/* 
1.编写登录接口
2.提交表单到接口
3.后端获取表单传递过来的参数
4.判断用户名是否存在， 若存在则判断用户名与密码是否一致，一致则登录成功。不一样则登录失败。

*/

/* 
1.编写注册接口
2.提交表单
3.获取前端传递过来的信息
4.读取存储用户的信息，若读取成功，判断用户是否已注册，读取失败表示任何用户注册，直接注册
*/