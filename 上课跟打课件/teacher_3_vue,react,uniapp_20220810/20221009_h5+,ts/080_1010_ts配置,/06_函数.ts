// 2022年10月10日11:03:34

/* 
函数的定义，函数分为具名函数与匿名函数

函数的调用
函数的参数
函数的返回值
*/

/* 
function 函数名(参数：数据类型)：返回值数据类型{
    return 返回值(与定义的数据类型一致)
}
函数里面参数之间逗号隔开，传递的参数数据类型和长度必须与定义的一致。参数传多或少均报错。
*/



function fun(a: string, b: number): number {
    return a.length + b;
    // return true; ---报错
}
let v: void;
// let v2: void = '111'; //---除了null和undefined,其他类型均报错
// void表示不能为任意类型，可用于函数中表示没有返回值。


function fun2(a: boolean): void {
    console.log('22222');
    // return '111' ---报错

}

fun('111', 99);
// fun('111', 99, 111); ---报错
// fun('111'); ---报错

// fun('111', '111'); ---报错
// fun2('111'); ---报错

fun2(true);
// fun2(false, 11); ---报错

let fun3 = (a: number, b: string): number => {
    return a + b.length;
}

let fun4 = (a: number) => a;

// 当一个参数可以不传递时参数名后面添加一个问号即可。
let fun5 = (a: string, b?: number): string => {
    return a;
}
fun5('哈哈哈哈');


// 当参数可以不传递时也可以设置默认值，只需要在数据类型后面赋值即可。

let fun6 = (a: string, b: number = 100) => {
    console.log(b);
}

fun6('等风来')

// 其它参数类型 --如果参数数据类型后面跟一个数组，表示数组中所有元素都必须符合前面的数据类型，一项不符合就报错。
let fun7 = (a: number, ...b: string[]) => {
    console.log("其它参数类型");
    console.log(b);
}
fun7(124, 'hhhh', '124', "哈哈哈哈");
// fun7(123, 1244); ---报错
// fun7(124, 'hhhh', '124', 1234); ---报错