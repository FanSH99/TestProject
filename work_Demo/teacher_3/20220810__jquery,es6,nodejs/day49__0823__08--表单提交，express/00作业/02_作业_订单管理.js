let fs = require("fs");
// 2022年8月23日9:27:21

let { writeFun } = require("./tools/writeFun");
let { readFun } = require("./tools/readFun");
let isFile = () => {
    return new Promise((resolve, reject) => {
        fs.access("file", (err) => {
            if (err) {
                reject(err);
                return
            }
            resolve("已存在")
        })
    })
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
// 
let mkdir = () => {
    return new Promise((resolve, reject) => {
        fs.mkdir("file", (err) => {
            if (err) {
                reject(err)
            } else {
                resolve("创建成功！")
            }
        })
    })
}

let getPayOrder = async () => {
    let data = await readFun("./file/user.json");
    data = JSON.parse(data);
    let newData = data.filter(item => item.orderPay == "未支付");
    let res = await writeFun("./file/pay.json", JSON.stringify(newData))
    console.log("程序执行完毕" + res);
}
let writeOrder = async () => {
    try {
        let res = await isFile();
        // 写入内容
        let data = await writeFun("./file/user.json", JSON.stringify(arry))
        console.log(data);
        getPayOrder();
    } catch (err) {
        // 先创建文件夹
        console.log(err);
        let res = await mkdir();
        console.log(res);
        let data = await writeFun("./file/user.json", JSON.stringify(arry))
        console.log(data);
        getPayOrder();
    }
}
writeOrder()