/* 
2022年8月22日14:33:22
*/

let fs = require("fs");
const { isReadable } = require("stream");
console.log(fs);

//异步 向文件中写入内容。 参数1---文件路径  参数2，写入的内容  参数3回调函数。 
//当文件不存在，则会自动创建文件（前提是文件夹路径正确，即存在文件夹。）  
fs.writeFile("./data/唐诗.txt", "窗前明月光，疑是地上霜。", (err) => {
    if (err) {
        console.log("唐诗.txt的文件内容写入失败" + err);
    } else {
        console.log("唐诗.txt写入成功！！！");//写入成功！！！
    }
})

try {
    fs.writeFileSync("./data/user.js", "let name='白浅';let age=19;")
    console.log("user.js内容写入成功");
} catch (err) {
    console.log("user.js文件写入失败" + err);
}

let list = [
    {

        name: "白浅",
        age: 19,
        sex: "女"
    },
    {

        name: "海绵宝宝",
        age: 11,
        sex: "男"
    },
    {

        name: "冯宝宝",
        age: 192,
        sex: "女"
    },
]

fs.writeFile("./data/list.json", JSON.stringify(list), (err) => {
    if (err) {
        console.log("list.json写入失败" + err);
    } else {
        console.log("list.json写入成功！！");
    }
})
