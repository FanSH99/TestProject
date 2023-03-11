let fs = require("fs");
// 2022年8月23日8:47:52

let list = [
    {
        name: "白浅",
        age: 19,
        sex: "女"
    },
    {
        name: "夜华",
        age: 17,
        sex: "男"
    },
    {
        name: "杀阡陌",
        age: 20,
        sex: "男"
    },
]

// 向user.json文件中写入数据
fs.writeFile("./user.json", JSON.stringify(list), (err) => {
    if (err) {
        console.log("写入失败！！" + err);
    } else {
        console.log("写入成功!!!");
        // 读取用户信息列表
        fs.readFile("./user.json", "utf-8", (err, data) => {
            if (err) {
                console.log("读取失败");
            } else {
                console.log("读取成功！！" + data);
                data = JSON.parse(data);
                let newData = data.filter((item) => {
                    return item.age > 18;
                })
                console.log(newData);
                fs.writeFile("成年.json", JSON.stringify(newData), (err) => {
                    if (err) {
                        console.log("写入失败");
                    } else {
                        console.log("写入成功");
                    }
                })
            }
        })
    }
})





