// 2022年10月11日09:34:11

// 大部分后端语言都是静态编程语言。

// 枚举是用来挂载常量的一个集合。用enum来定义

// 数字枚举。默认首个属性为数字0，属性值等于索引号。

enum Direction {
    top,
    bottom,
    left,
    right
}

console.log(Direction);

let mym: Math = Math;
let myindex: number = mym.floor(mym.random() * 8);
console.log(myindex);
switch (myindex) {
    case Direction.top:
        console.log(Direction[myindex], "北方");
        break
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
enum Mynum {
    women = 2,
    men = 1,
}

console.log(Mynum);


enum Color {
    red = '红色',
    blue = '蓝色',
    yellow = '黄色',
}

console.log(Color);

if (Color.red == '红色') {
    console.log('I like red');

}

// 字符串枚举
