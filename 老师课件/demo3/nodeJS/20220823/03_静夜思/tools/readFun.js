let fs = require("fs");
let readFun = (url)=>{
    return new Promise((reslove,reject)=>{
        fs.readFile(url,"utf-8",(err,data)=>{
            if(err){
                reject("读取失败"+err);
            }else{
               reslove(data)
            }
        })
    })
}

module.exports = {
    readFun
}