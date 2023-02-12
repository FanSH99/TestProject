let fs = require("fs");
let writeFun = (url,data)=>{
    return new Promise((reslove,reject)=>{
        fs.writeFile(url,data,(err)=>{
            if(err){
                reject(err)
            }else{
                reslove("写入成功")
            }
        })
    })
}

let readFun = (url)=>{
    return new Promise((reslove,reject)=>{
        fs.readFile(url,'utf-8',(err,data)=>{
            if(err){
                reject(err)
            }else{
                reslove(data)
            }
        })
    })
}

module.exports = {
    writeFun,
    readFun
}