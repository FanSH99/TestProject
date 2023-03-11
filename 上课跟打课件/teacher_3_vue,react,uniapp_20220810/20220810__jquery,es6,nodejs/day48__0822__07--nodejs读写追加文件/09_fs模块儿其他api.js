/* 
2022年8月22日16:10:19
*/

let fs = require("fs");
// console.log(fs);
// 异步删除文件
fs.unlink("./data/a.txt", (err) => {
    if (err) {
        console.log("删除失败！！！");
    }
    console.log('data/a.txt was deleted');
});

// 同步删除文件
// fs.unlinkSync();

fs.copyFile("./data/list.json", "./data/data.json", (err) => {
    if (err) {
        console.log("list.json拷贝失败");
    } else {
        console.log("list.json拷贝成功！！");
    }

})

//copyFileSyno()  --同步拷贝文件

fs.rename("./data/data.json", "./data/listcopy.json", (err) => {
    if (err) {
        console.log("data.json更改文件名失败");
    } else {
        console.log("data.json更改文件名成功");
    }
})