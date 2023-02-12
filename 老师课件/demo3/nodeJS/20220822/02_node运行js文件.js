let num = Math.floor(Math.random()*10);
if(num>=5){
    console.log("不错")
}else{
    console.log("菜鸡")
}
// node js文件名称   运行js文件
let funa = ()=>{
    console.log("哈哈哈俺是箭头函数")
    console.log(this)
}
funa();
// function getb(){
//     console.log(this)
// }
// getb();

let obj = {
    name:"张三",
    age:18,
    say(){
        console.log(this)
        console.log("我会说")
    }
}
obj.say();

// setTimeout(()=>{
//     console.log("哈哈哈哈哈")
// },2000)
// console.log("嘿嘿嘿")

let p = new Promise((reslove,reject)=>{
    setTimeout(()=>{
    console.log("哈哈哈哈哈")
    reslove("哈哈哈哈")
},2000)
})
p.then((res)=>{
    console.log(res);
    console.log("嘿嘿嘿")
})
// setTimeout(()=>{
//     Promise.resolve("哈哈哈哈").then((res)=>{
//         console.log(res);
//         console.log("嘿嘿嘿")
//      })
// },2000)
let success = ()=>{
    return new Promise((reslove,reject)=>{
        setTimeout(()=>{
            reslove("成功")
        },3000)
     })
}
let fun = async ()=>{
     let res = await success();
     console.log(res)
     console.log("恭喜恭喜")
}
fun();