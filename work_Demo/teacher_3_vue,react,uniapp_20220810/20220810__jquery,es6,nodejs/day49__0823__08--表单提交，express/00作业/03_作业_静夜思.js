/* let fs = require("fs"); */
// 2022年8月23日9:32:01

let { writeFun } = require("./tools/writeFun");
let { readFun } = require("./tools/readFun");

let jys = async () => {
    let res1 = await writeFun("./data/1.txt", "窗前明月光");
    let res2 = await writeFun("./data/2.txt", "疑是地上霜");
    let res3 = await writeFun("./data/3.txt", "举头望明月");
    let res4 = await writeFun("./data/4.txt", "低头思故乡");
    let data1 = await readFun("./data/1.txt");
    let data2 = await readFun("./data/2.txt");
    let data3 = await readFun("./data/3.txt");
    let data4 = await readFun("./data/4.txt");
    console.log(data1);
    console.log(data2);
    console.log(data3);
    console.log(data4);
}
jys();