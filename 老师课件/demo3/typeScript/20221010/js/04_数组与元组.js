// 定义字符串数组
let arry = ["23", "w"];
// 定义number数组
let arry1 = [1, 2, 3, 4];
let arry2 = [21, "wee", true];
// 元组 ：元组就是 规定了数组中的每一项的数据类型
let arryT = ['23123', 1234, true, null];
// 在元组中无论你是多一项还是少一项都会报错
// 元组可以使用数组中的任意方法
arryT.forEach(item => {
    console.log(item);
});
function fun(a, b = '12312312', ...c) {
    return a.length;
}
