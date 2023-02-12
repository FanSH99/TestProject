// function userLogin(a){
//     console.log(a)
// }
// userLogin("1234")
// 泛型：当前我们封装函数 定义接口 定义类时 不确定某个参数具体数据类型时可以用泛型定义
// 泛型 就相当于一个变量 传递什么类型 它就是什么类型
// 泛型T是自定义的
function userLogin(a) {
    console.log(a);
}
userLogin("嘿嘿嘿");
function getName(name, age) {
    return age;
}
getName(1234, "张三");
var user1 = {
    name: "张三",
    age: 18
};
var user2 = {
    name: 123,
    age: "12"
};
// 泛型与类
var Hl = /** @class */ (function () {
    function Hl(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    Hl.prototype.say = function (a) {
        console.log(a);
    };
    return Hl;
}());
var h11 = new Hl("张三", 18, true);
h11.say("嘿嘿嘿");
