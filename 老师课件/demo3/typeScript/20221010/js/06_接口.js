let p = {
    name: "徐梓林",
    age: 8,
    like: "女"
};
let s = {
    name: "马国庆",
    age: 18,
    sex: false,
    like: "吃",
    kecheng: ["语文", "科学", '音乐'],
    say(a) {
        return a.length;
    }
};
// s.sex = true;  报错
s.age = 20;
s.say("学习使我emo");
console.log(s);
let funn1;
funn1 = (a, b) => {
    return a.length + b;
};
let dog = {
    name: "小花",
    age: 1
};
let cat = {
    sex: true,
    like: "老鼠",
    name: "汤姆",
    age: 2
};
let cow = {
    price: "60/斤",
    name: "老黄牛",
    age: 4,
    sex: true,
    like: "嫩草"
};
