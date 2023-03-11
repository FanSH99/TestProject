// 2022年10月10日15:19:26

let str2 = '2345452';
// 类型推论。可以推论出初次声明的变量的数据类型，并且后续重新赋值类型需与初次声明的一致。
// 不能推论出数组和对象的类型。
// str2 = true; ---类型不匹配，报错。
str2 = '派大星';

console.log(str2.length);

let arry1 = ['瓦尔塔', 1111];

arry1[0] = 111;// --- 不报错

let obj = {
    name: "张安",
    age: 13
}

// obj.name = 111; ---报错

function fun(a) {
    return a
}
fun(10)



