let fs = require("fs");
let writeFun = (url,data)=>{
    return new Promise((reslove,reject)=>{
        fs.writeFile(url,data,(err)=>{
            if(err){
                reject(err)
                return
            };
            reslove("写入成功")
        })
    })
}
module.exports = {
    writeFun
}