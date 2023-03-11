/* 2022年8月22日09:46:08 */

let num = Math.floor(Math.random() * 10);
if (num >= 6) {
    console.log("学的不错");
} else {
    console.log("继续加油哦");
}


let funa = () => {
    console.log("哈哈哈我是箭头函数");
    console.log(this);//{}---没有window
}
funa();


function getb() {
    console.log(this);//指向的是node
}
getb();



let obj = {
    name: "白浅",
    age: 18,
    say() {
        console.log(this);//指向的是{name:白浅,age:18,say:[Function:say]}
        console.log("我会说");
    }
}
obj.say();


let p = new Promise((reslove, reject) => {
    setTimeout(() => {
        console.log("1哈哈哈");
        reslove("1——1哈哈哈哈")
    }, 2000)
})

p.then((res) => {
    console.log(res);
    console.log("2嘿嘿额黑");
})


setTimeout(() => {
    Promise.resolve("白浅喜欢白子画").then((res) => {
        console.log(res);
        console.log("海绵宝宝！");
    })
}, 2000)

let fun = async () => {
    let res = await new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove("成功了")
        }, 2000)
    })
    console.log(res);
    console.log("恭喜恭喜");
}
fun();

function success() {
    console.log("1+2=" + 1 + 2);
    console.log("1+2=" + (1 + 2));
}

let fun2 = async () => {
    let res = await success();
    console.log(res);
    console.log("恭喜成功了！！！");
}
fun2();

// 文件名称不要以汉字命名。