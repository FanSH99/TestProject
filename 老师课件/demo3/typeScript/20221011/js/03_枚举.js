// 数字枚举
// 数字枚举默认 首个属性为数字0 下面属性依次+1
var Direction;
(function (Direction) {
    Direction[Direction["top"] = 0] = "top";
    Direction[Direction["bottom"] = 1] = "bottom";
    Direction[Direction["left"] = 2] = "left";
    Direction[Direction["right"] = 3] = "right";
})(Direction || (Direction = {}));
console.log(Direction);
var mym = Math;
var myindex = mym.floor(mym.random() * 4);
switch (myindex) {
    case Direction.top:
        console.log(Direction[myindex]);
        break;
    case Direction.bottom:
        console.log(Direction[myindex]);
        break;
    case Direction.left:
        console.log(Direction[myindex]);
        break;
    case Direction.right:
        console.log(Direction[myindex]);
        break;
}
console.log(myindex);
var Mynumber;
(function (Mynumber) {
    Mynumber[Mynumber["women"] = 666] = "women";
    Mynumber[Mynumber["men"] = 667] = "men";
})(Mynumber || (Mynumber = {}));
console.log(Mynumber);
// 字符串枚举
var Color;
(function (Color) {
    Color["red"] = "\u7EA2\u8272";
    Color["blue"] = "\u84DD\u8272";
    Color["pink"] = "\u7C89\u8272";
})(Color || (Color = {}));
if (Color.red == '红色') {
    console.log("I like red");
}
console.log(Color);
