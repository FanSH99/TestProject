// 数字枚举
// 数字枚举默认 首个属性为数字0 下面属性依次+1
enum Direction {
    top,
    bottom,
    left,
    right
}

console.log(Direction)
let mym: Math = Math;
let myindex: number = mym.floor(mym.random() * 4);
switch (myindex) {
    case Direction.top:
        console.log(Direction[myindex])
        break;
    case Direction.bottom:
        console.log(Direction[myindex])
        break;
    case Direction.left:
        console.log(Direction[myindex])
        break;
    case Direction.right:
        console.log(Direction[myindex])
        break;
}
console.log(myindex)

enum Mynumber{
    women=666,
    men
}
console.log(Mynumber)

// 字符串枚举

enum Color{
    red="红色",
    blue="蓝色",
    pink="粉色" 
}
if(Color.red=='红色'){
    console.log(`I like red`)
}
console.log(Color)