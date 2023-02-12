let fs = require('fs');
console.log(fs)
// 异步删除文件 
// fs.unlink("./data/a.txt",(err)=>{
//     if(err){
//         console.log("删除失败："+err)
//     }else{
//         console.log("删除成功")
//     }
// })
//  fs.unlinkSync() 同步删除文件

// 拷贝文件
// fs.copyFile("./data/list.json","./data/data.json",(err)=>{
//     if(err){
//         console.log("拷贝失败")
//     }else{
//         console.log("拷贝成功")
//     }
// })

// fs.copyFileSync()

// 更改文件名称
fs.rename("./data/data.json",'./data/mylist.json',(err)=>{
    if(err){
        console.log("更改失败")
    }else{
        console.log("更改成功")
    }
})

// fs.renameSync()