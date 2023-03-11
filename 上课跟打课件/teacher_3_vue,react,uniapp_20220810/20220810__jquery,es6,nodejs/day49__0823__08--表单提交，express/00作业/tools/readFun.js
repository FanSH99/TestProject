let fs = require("fs");
let readFun = (url) => {
    return new Promise((reslove, reject) => {
        fs.readFile(url, "utf-8", (err, data) => {
            if (err) throw reject("读取失败" + err);
            console.log("读取成功");
            reslove(data); //就等同于if else\
        })

    })
}

module.exports = {
    readFun
}