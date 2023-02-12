let fs = require("fs");
console.log(fs)
// 异步追加
fs.appendFile("./data/唐诗.txt",";举头望明月,低头思故乡。",(err)=>{
    if(err){
        console.log("追加失败")
    }else{
        console.log("追加成功")
    }
})


try{
    fs.appendFileSync("./data/user.js",';\n console.log(name)')
}catch(err){
    console.log(err)
}
/* 
// 作业：有一个存储用户信息数组list。1.将用户信息列表写入user.json功能。2.读取用户信息列表找到所有年龄大于18的用户在重新写入文件成年.json中。3.向user.json中添加一用户。(不能使用同步方式，不能出现回调地狱（封装读写模块儿）)
作业：使用 fs异步读取文件的方法依次输入床前明月光,疑似地上霜,举头望明月,低头思故乡 (promise 封装 或者 asyn awit)；
作业二：向文件夹file中的user.json中写入一条数据  arry=[{userId:001,name:"手机",orderId:110,orderPay:"已支付"},{userId:002,name:"电脑",odrderId:120,orderPay:"未支付"},{userId:003,name:"平板",orderId:119,orderPay:"未支付"}] ，读取文件内容 将未支付的订单写入 file/pay.json;
*/
