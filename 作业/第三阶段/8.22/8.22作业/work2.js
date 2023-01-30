let fs = require("fs");

let readData = (url) => {
    fs.readFile(url, "utf-8", (err, data) => {
        if (err) {
            console.log("文件读取失败!!!");
        } else {
            console.log(data);
        }
    }
    )
}

async function asyncFunc() {
    try {
        console.log("文件读取成功，读取的对象内容如下：");
        await readData("./data/1.txt");
        await readData("./data/2.txt");
        await readData("./data/3.txt");
        await readData("./data/4.txt");
    } catch (err) {
        console.log(err);
    }
}
asyncFunc();