/* 
2022年8月22日14:03:05
*/


// 引入node内置模块时，会默认从nodejs安装目录的node_modules中来查找
let fs = require("fs");
console.log(fs);

// let a = require("a");
// console.log(a);// Cannot find module 'a'


// 使用fs模块异步创建文件夹，参数一是创建的文件夹名称，参数二是回调函数。
// fs.mkdir("user", (err) => {
//     if (err) {
//         console.log(err);//file already exists,
//         console.log("user创建失败！");
//     } else {
//         console.log("user文件夹创建成功！");//data文件夹创建成功
//     }
// })

// 在js中只要有回调函数，就是异步过程。
// sync同步  nkdirSync,同步创建文件夹，餐位是创建的文件夹名称。
// fs.mkdirSync("bin");

// try {
//     let res = fs.mkdirSync("user");
//     console.log("user创建成功");
// } catch (err) {
//     console.log("user创建失败" + err);
// }

// 异步删除rmdir
fs.rmdir("user", (err) => {
    if (err) {
        console.log("user删除失败" + err);
        return;//if...else也可以。
    }
    console.log("user删除成功");
})

// 同步删除redirSync
try {
    fs.rmdirSync("bin");
    console.log("bin删除成功！");
} catch (err) {
    console.log("bin同步删除失败" + err);
}

// access 异步判断文件夹是否存在。如果有错误信息证明不存在。
fs.access("data", (err) => {
    if (err) {
        console.log("当前文件夹不存在");
        fs.mkdir("data", (myerr) => {
            if (myerr) {
                console.log("data创建失败" + myerr);
            } else {
                console.log("data创建成功");
            }
        })
    } else {
        console.log("文件夹已经存在");
    }
})

// 作业1.使用Promise或者async await封装以上代码，让代码看起来更整洁，避免回调地狱。

// 同步判断是否存在
fs.accessSync("bin");




