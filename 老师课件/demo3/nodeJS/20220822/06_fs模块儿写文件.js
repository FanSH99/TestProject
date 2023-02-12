let fs  = require("fs");
console.log(fs)
// 向文件中异步写入内容 参数一 文件路径 参数二 写入内容（字符串） 参数三：回调函数
// 若文件不存在则会自动创建
fs.writeFile("./data/唐诗.txt","窗前明月光,疑似地上霜",(err)=>{
     if(err){
        console.log("写入失败"+err)
     }else{
        console.log("写入成功")
     }
})

try{
    fs.writeFileSync("./data/user.js","let name = '张三'")
    console.log("写入成功")
}catch(err){
    console.log("写入失败"+err)
}
let list = [
    {
        name:"张三",
        age:18,
        sex:"男"
    },
    {
        name:"李四",
        age:28,
        sex:"男"
    },
    {
        name:"王五",
        age:38,
        sex:"男"
    }
    
]
// 若写入的数据是对象那么需要使用JSON.stringify转化为字符串在写入
fs.writeFile("./data/list.json",JSON.stringify(list),(err)=>{
    if(err){
        console.log("写入失败"+err)
     }else{
        console.log("写入成功")
     }
})