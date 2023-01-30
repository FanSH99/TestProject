let fs = require("fs");
console.log(fs);


let readFun = (url) => {
    return new Promise((resolve, reject) => {
        fs.readFile(url, "utf-8", (err, data) => {
            if (err) return reject(err);
            resolve(data);

        })
    })
}


let writeFun = (url, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(url, data, (err) => {
            if (err) return reject(err);
            resolve("success");
        })
    })
}
let mkdirFun = (url) => {
    return new Promise((resolve, reject) => {
        fs.mkdir(url, "utf-8", (err) => {
            if (err) return reject(err);
            resolve("success")
        })
    })
}

let delFun = (url) => {
    return new Promise((resolve, reject) => {
        fs.unlink(url, (err) => {
            if (err) return reject(err);
            resolve("success")
        })
    })
}

module.exports = {
    readFun,
    writeFun,
    mkdirFun,
    delFun
}