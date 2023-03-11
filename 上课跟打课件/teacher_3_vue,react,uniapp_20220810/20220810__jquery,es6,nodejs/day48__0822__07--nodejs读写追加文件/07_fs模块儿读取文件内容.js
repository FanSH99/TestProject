/* 
2022年8月22日14:46:59
*/

let fs = require("fs");
console.log(fs);

fs.readFile("./data/唐诗.txt", (err, data) => {
    if (err) {
        console.log("唐诗.txt文件读取失败");
    } else {
        console.log(data);
        //<Buffer e7 aa 97 e5 89 8d e6 98 8e e6 9c 88 e5 85 89 ef bc 8c e7 96 91 e6 98 af e5 9c b0 e4 b8 8a e9 9c 9c e3 80 82>

        // 解决读取文件是buffer，第一种方法，添加一个"utf-8”）
    }
})

// 在nodejs中所有的异步函数都存在一个易错机制，只要有错误，优先返回错误，所以写的时候，先写错误情况。

fs.readFile("./data/唐诗.txt", "utf-8", (err, data) => {
    if (err) {
        console.log("唐诗txt文件读取失败");
    } else {
        console.log("唐诗文件读取成功，内容如下：", data);//唐诗文件读取成功，内容如下： 窗前明月光，疑是地上霜。

    }
})

fs.readFile("./data/list.json", "utf-8", (err, data) => {
    if (err) {
        console.log("list.json文件读取失败！");
    } else {
        console.log("list.json文件读取成功，内容如下：" + data);
        /* [
    {
        "name": "白浅",
        "age": 19,
        "sex": "女"
    },
    {
        "name": "海绵宝宝",
        "age": 11,
        "sex": "男"
    },
    {
        "name": "冯宝宝",
        "age": 192,
        "sex": "女"
    }
] */
    }

    // 注意读取json读取的是字符串格式，需要转换成对象。
})


fs.readFile("./data/list.json", "utf-8", (err, data) => {
    if (err) {
        console.log("list.json文件读取失败！");
    } else {
        console.log("list.json文件读取成功，读取的对象内容如下：" + JSON.parse(data));
        /* // 注意读取json读取的是字符串格式，需要转换成对象。 */
        //[object Object],[object Object],[object Object]
        console.log(JSON.parse(data)[1]);//{ name: '海绵宝宝', age: 11, sex: '男' }
    }
})

try {
    let res = fs.readFileSync("../data.js");
    console.log(res);
} catch {
    console.log("读取失败啦！！");
}