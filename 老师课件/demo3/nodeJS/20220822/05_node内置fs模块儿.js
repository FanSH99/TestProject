//使用require 引入node内置模块儿时 他会默认从nodejs安装目录的根目录中node_modules 文件夹引入
let fs = require("fs");
console.log(fs)
// 在js中只要你看到存在回调函数那么这个过程一定是异步编程
// 使用fs模块儿异步创建文件夹 参数一将要创建的文件夹名称 参数二：回调函数
// fs.mkdir("data",(err)=>{
//     // err 表示错误信息
//      if(err){
//         console.log("创建失败"+err)
//      }else{
//         console.log("创建成功")
//      }
       
// });
// 同步创建文件夹 参数为要创建的文件夹名称
// try{
//     let res = fs.mkdirSync("user");
//     console.log("成功啦")
// }catch(err){
//     console.log("创建失败"+err)
// }
// console.log('哈哈哈哈哈')
// 异步删除对应的文件夹 参数一将删除的文件夹 参数二删除后的回调函数
// fs.rmdir("user",(err)=>{
//    if(err){
//      console.log("删除失败:"+err);
//      return
//    }
//    console.log("删除成功")
// })
// try{
//     fs.rmdirSync("data");
//     console.log("删除成功")
// }catch(err){
//     console.log("同步删除失败"+err)
// }
// 判断文件夹是否存在
fs.access("data",(err)=>{
    if(err){
        console.log("文件夹不存在")
        fs.mkdir("data",(myerr)=>{
                if(myerr){
                    console.log("创建失败"+myerr)
                }else{
                    console.log("创建成功")
                }
        })
        return
    }
    console.log("文件夹已存在")
})
// 作业：使用promise async await 封装以上代码 是代码更整洁避免回调地狱
// 同步判断
// fs.accessSync()