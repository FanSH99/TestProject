// 联合类型
// 联合数据类型的变量 只能调用联合类型共有方法
let str3:string | number | boolean;
str3="2323";
str3=124
str3=true
// 联合数据类型数组
let arry4:(string | number)[]=["233423",12323];

interface Aa{
    sex:number | string
}
let aa:Aa = {
    sex:"232"
}

function fun8(a:string|number):string|number{
    return a
}
fun8(2323)

// 类型断言
function fun9(a:string|number):number{
    // as 当作 
    let a1 = a as string;
    if(a1.length){
        return a1.length
    }else{
        let a2 = a as number;
        return a2.toString().length
    }
}

console.log(fun9(1235467889))

// 类型守卫
function fun10(a:number|string):number{
    if(typeof a === 'string'){
      return a.length
    }else{
        return a
    }
}
