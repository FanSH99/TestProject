"use strict";
// 2022年10月11日09:34:11
// 大部分后端语言都是静态编程语言。
// 枚举是用来挂载常量的一个集合。用enum来定义
// 数字枚举。默认首个属性为数字0，属性值等于索引号。
var Direction;
(function (Direction) {
    Direction[Direction["top"] = 0] = "top";
    Direction[Direction["bottom"] = 1] = "bottom";
    Direction[Direction["left"] = 2] = "left";
    Direction[Direction["right"] = 3] = "right";
})(Direction || (Direction = {}));
console.log(Direction);
let mym = Math;
let myindex = mym.floor(mym.random() * 8);
console.log(myindex);
switch (myindex) {
    case Direction.top:
        console.log(Direction[myindex], "北方");
        break;
    case Direction.bottom:
        console.log(Direction[myindex], '南方');
        break;
    case Direction.left:
        console.log(Direction[myindex], '东方');
        break;
    case Direction.right:
        console.log(Direction[myindex], '西方');
        break;
    default:
        console.log("你已迷失方向");
}
var Mynum;
(function (Mynum) {
    Mynum[Mynum["women"] = 2] = "women";
    Mynum[Mynum["men"] = 1] = "men";
})(Mynum || (Mynum = {}));
console.log(Mynum);
var Color;
(function (Color) {
    Color["red"] = "\u7EA2\u8272";
    Color["blue"] = "\u84DD\u8272";
    Color["yellow"] = "\u9EC4\u8272";
})(Color || (Color = {}));
console.log(Color);
if (Color.red == '红色') {
    console.log('I like red');
}
// 字符串枚举
