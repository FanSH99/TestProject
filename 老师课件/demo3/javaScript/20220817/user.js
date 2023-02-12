let name = '张三';
let age = 18;
let user = {
    name:name,
    age:age
}
// 导出模块儿 导出多个模块儿
export {
    name,
    age
};
export function getuser(){
    console.log("哈哈哈哈")
}