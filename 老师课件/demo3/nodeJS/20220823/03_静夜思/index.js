let {writeFun} = require("./tools/writeFun");
let {readFun} = require("./tools/readFun");
let jys = async ()=>{
    let res1 = await writeFun("1.txt","窗前明月光");
    let res2 = await writeFun("2.txt","疑是地上霜");
    let res3 = await writeFun("3.txt","举头望明月");
    let res4 = await writeFun("4.txt","低头思故乡");
    let data1 = await readFun("1.txt");
    let data2 = await readFun("2.txt");
    let data3 = await readFun("3.txt");
    let data4 = await readFun("4.txt");
    console.log(data1)
    console.log(data2)
    console.log(data3)
    console.log(data4)
}
jys();