interface Mybig {
    size:string,
    age:number,
    say():number
}

// 表示类中必须含有接口Mybig属性
class Big implements Mybig{
    size:string;
    age:number;
    say(){
        return 123
    }
}

interface Myage {
    price:string,
    getSum():void
}
// 若class类中需要用到多个接口 接口与接口之间使用逗号隔开
class Age implements Mybig,Myage{
    price:string
    size:string
    age:number
    getSum(){
        
    }
    say(): number {
        return 124   
    }
}

// 类可以作为接口使用
class Myname {
    name:string;
    age:number
    say():number{
        return 124
    }
}
let myuser:Myname = {
    name:"张三",
    age:18,
    say(){
        return 12345
    }
}

let ages:number = 10;
if(ages>100){
    console.log("凉凉")
}