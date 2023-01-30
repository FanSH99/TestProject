let fs = require("fs");

let mkData = (url) => {
    fs.mkdir(url, (err) => {
        if (err) {
            console.log("文件夹创建失败");
        } else {
            console.log("文件夹创建成功！！");
        }
    })
}

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

let readData = (url) => {
    fs.readFile(url, "utf-8", (err, data) => {
        if (err) {
            console.log("文件读取失败!!!");
        } else {
            let user = JSON.parse(data);
            console.log("文件读取成功，读取的对象内容如下：", user, typeof user);
            let nopay = user.filter((item) => {
                return item.orderPay == "未支付";
            })
            console.log(nopay);
            writeData("./file/pay.json", nopay);
        }
    }
    )
}
let arry = [
    {
        userId: 001,
        name: "手机",
        orderId: 110,
        orderPay: "已支付"

    },
    {
        userId: 002,
        name: "电脑",
        orderId: 120,
        orderPay: "未支付"
    },
    {
        userId: 003,
        name: "平板",
        orderId: 119,
        orderPay: "未支付"

    },
]
async function asyncFunc() {
    try {
        await mkData("file");
        await writeData("./file/user.json", arry);
        await readData("./file/user.json");
    } catch (err) {
        console.log(err);
    }
}
asyncFunc();