let fs = require("fs");
let writeFun = (url, data) => {
    return new Promise((reslove, reject) => {
        fs.writeFile(url, data, (err) => {
            if (err) throw reject("写入失败" + err);
            reslove("写入成功！" + data); //就等同于if else
        })
    })
}

module.exports = {
    writeFun
}