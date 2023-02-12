let {writeFun} = require("./tools/writeFun");
let {readFun} = require("./tools/readFun")
let list = [
    {
        name:"张三",
        age:17,
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
// 向user.json文件中写入用户数据
// fs.writeFile("user.json",JSON.stringify(list),(err)=>{
//     if(err){
//         console.log("写入失败"+err)
//     }else{
//         console.log("写入成功")
//         // 读取用户信息列表
//         fs.readFile("user.json","utf-8",(err,data)=>{
//             if(err){
//                 console.log("读取失败")
//             }else{
//                 console.log(data)
//                 data = JSON.parse(data);
//                 let newData = data.filter((item,index)=>{
//                     return item.age>18
//                 })
//                 console.log(newData)
//                 fs.writeFile("成年.json",JSON.stringify(newData),(err)=>{
//                    if(err){
//                      console.log("写入失败"+err)
//                    }else{
//                     console.log("写入成功")
//                    }
//                 })
//             }
//         })
//     }
// })

// 将用户信息写入user.json中
 let writeUser = async ()=>{
    let res = await writeFun('user.json',JSON.stringify(list));
    let data = await readFun("user.json");
    data = JSON.parse(data);
    let obj = {
        name:"小红",
        age:20,
        sex:"女"
    }
    data.push(obj);
    let newmsg = await writeFun("user.json",JSON.stringify(data))
    console.log(newmsg)
    let newData = data.filter((item,index)=>{
        return item.age>18
    })
    console.log(newData)
    let msg = await writeFun("成年.json",JSON.stringify(newData));
    console.log(msg)
    
 }
 writeUser();