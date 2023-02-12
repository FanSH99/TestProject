let fs = require("fs");
console.log(fs)

// 在nodejs中所有的异步函数都存在易错机制
// 异步读取文件内容  参数一要读取的文件路径 参数二 编码格式 utf-8 参数三回调函数
fs.readFile("./data/唐诗.txt","utf-8",(err,data)=>{
    // err 表示读取失败信息 data表示读取到的数据;
    if(err){
        console.log("读取失败"+err)
    }else{
        console.log(data)
    }
})

fs.readFile("./data/list.json",'utf-8',(err,data)=>{
    if(err){
        console.log("读取失败")
    }else{
        //JSON.parse将字符串转化为对象
        console.log(JSON.parse(data))
        
    }
})

try {
    let res = fs.readFileSync("./data/user.js","utf-8");
    console.log(res)
}catch(err){
    console.log(err)
}