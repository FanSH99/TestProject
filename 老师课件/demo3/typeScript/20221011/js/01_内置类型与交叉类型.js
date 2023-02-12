// 内置类型
var time = new Date();
var m = Math;
m.random();
var w = window;
var fun9 = function () {
    console.log("函数类型");
};
var arry1 = ["sdw2", "2332"];
var arry2 = [
    {
        name: "张三",
        age: 19
    }
];
var dom = document.getElementById("aa");
var p = new Promise(function (reslove, reject) {
    reslove(111);
});
var hh = ["sdsd", 'dsds', 'sds'];
var fun10 = function (a, b) {
    return a.length + b;
};
fun10("123", 12);
var xiaoming = {
    name: "小明",
    age: 18,
    sex: 1,
    like: "学习",
    say: "嘿嘿",
    color: "red"
};
