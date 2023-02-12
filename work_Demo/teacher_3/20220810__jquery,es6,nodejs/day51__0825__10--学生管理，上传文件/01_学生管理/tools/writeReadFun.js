/* 2022年8月25日09:41:19 */
let fs = require("fs")
let writeFun = (url, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(url, data, (err) => {
            if (err) {
                reject(err);

            } else {
                resolve("写入成功")
            }

        })
    })
}

let readFun = (url) => {
    return new Promise((resolve, reject) => {
        fs.readFile(url, "utf-8", (err, data) => {
            if (err) {
                reject(err);

            } else {
                resolve(data);
            }

        })
    })
}


module.exports = {
    writeFun,
    readFun
}