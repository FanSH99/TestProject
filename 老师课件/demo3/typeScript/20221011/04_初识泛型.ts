// function userLogin(a){
//     console.log(a)
// }

// userLogin("1234")
// 泛型：当前我们封装函数 定义接口 定义类时 不确定某个参数具体数据类型时可以用泛型定义
// 泛型 就相当于一个变量 传递什么类型 它就是什么类型
// 泛型T是自定义的
function userLogin<T>(a:T){
    console.log(a)
}
userLogin("嘿嘿嘿")

function getName<T,U>(name:T,age:U):U{
    return age
}
getName<number,string>(1234,"张三")

// 泛型与接口

interface Myuser<T,U>{
    name:T
    age:U
}
let user1:Myuser<string,number> = {
    name:"张三",
    age:18
}
let user2:Myuser<number,string>={
    name:123,
    age:"12"
}


// 泛型与类

class Hl<T,U,I,O>{
    name:T
    age:U
    sex:I
    constructor(name:T,age:U,sex:I){
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    say(a:O){
        console.log(a)
    }
}

let h11 = new Hl<string,number,boolean,string>("张三",18,true);
h11.say("嘿嘿嘿")