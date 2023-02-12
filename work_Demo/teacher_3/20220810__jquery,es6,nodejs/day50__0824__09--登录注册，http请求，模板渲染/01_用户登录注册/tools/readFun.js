let fs = require("fs");
let readFun = (url) => {
    return new Promise((resolve, reject) => {
        fs.readFile(url, "utf-8", (err, data) => {
            if (err) return reject(err);
            resolve(data);
        })
    })
}

module.exports = {
    readFun
}