let fs = require("fs");
let {writeFun} = require("./tools/writeFun")
let {readFun} = require("./tools/readFun")
// 判断当前文件夹是否存在 若存在写入 若不存在则创建
let isFile = ()=>{
    return new Promise((reslove,rejcet)=>{
         fs.access("file",(err)=>{
            if(err){
                rejcet(err)
                return
            }
            reslove('已存在')
         })
    })
}
// 创建文件夹
let mkDir = ()=>{
    return new Promise((reslove,reject)=>{
        fs.mkdir("file",(err)=>{
            if(err){
                reject(err)
            }else{
                reslove("创建成功")
            }
        })
    })
}
let arry=[{userId:001,name:"手机",orderId:110,orderPay:"已支付"},{userId:002,name:"电脑",odrderId:120,orderPay:"未支付"},{userId:003,name:"平板",orderId:119,orderPay:"未支付"}];
let getPayOrder = async ()=>{
    let data = await readFun('./file/user.json');
    data = JSON.parse(data);
    let newData = data.filter(item=>item.orderPay == '未支付');
    let res  = await writeFun("./file/pay.json",JSON.stringify(newData));
    console.log("程序执行完毕"+res)
}
let writeOrder = async ()=>{
   try{
    let res = await isFile();
    // 向文件中写入内容
    let data = await writeFun("./file/user.json",JSON.stringify(arry));
    console.log(data)
    getPayOrder();
   }catch(err){
    // 先创建文件夹在写入文件
    let res = await mkDir();
    let data = await writeFun("./file/user.json",JSON.stringify(arry));
    console.log(data)
    getPayOrder();
   }

}

writeOrder();