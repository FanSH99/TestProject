let fs = require("fs");
let writeFun = (url, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(url, data, (err) => {
            if (err) return reject(err);
            resolve("success");
        })
    })
}

module.exports = {
    writeFun
}