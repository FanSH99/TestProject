let fs = require("fs");
let list = [
    {
        name: "海绵宝宝",
        age: 19,
        sex: "男"
    },
    {
        name: "派大星",
        age: 18,
        sex: "男"
    },
    {
        name: "珊迪",
        age: 19,
        sex: "女"
    },
    {
        name: "白浅",
        age: 21,
        sex: "女"
    },
    {
        name: "夜华",
        age: 20,
        sex: "男"
    },
];

// 封装写入数据
let writeData = (url, list) => {
    fs.writeFile(url, JSON.stringify(list), (err) => {
        if (err) {
            console.log("用户信息写入失败！！！");
        } else {
            console.log("用户信息写入成功！");
            return list;
        }
    })
}
// writeData("./data/user.json", list)

let readData = (url) => {
    let read = fs.readFile(url, "utf-8", (err, data) => {
        if (err) {
            console.log("文件读取失败!!!");
        } else {
            let user = JSON.parse(data);
            console.log("文件读取成功，读取的对象内容如下：", user, typeof user);
            let adult = user.filter((item) => {
                return item.age > 18;
            })
            console.log(adult);
            writeData("./data/adult.json", adult);
        }
    }
    )
}

async function asyncFunc() {
    try {
        await writeData("./data/user.json", list);
        await readData("./data/user.json");
    } catch (err) {
        console.log(err);
    }
}
asyncFunc();

