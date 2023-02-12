let fs = require("fs");
console.log(fs);

//异步追加fs.appendFile
fs.appendFile("./data/唐诗.txt", ";举头望明月，低头思故乡。", (err) => {
    if (err) {
        console.log("唐诗.txt追加失败。");
    } else {
        console.log("唐诗.txt追加成功！！。");
    }
});
/* 
 作用2.有一个存储user的数组list。
 1.将用户信息列表写入user.json中。
 2.读取用户信息列表。找到所有的年龄大于18的用户，在重新写入成年.json中
 3.在user.json中追加用户。不能使用同步编程。不用出现回调地狱的问题。
    所以需要封装读写功能。
 */
try {
    fs.appendFileSync("./data/user.js", "console.log(name);")
    console.log("user.js追加成功啦");
} catch (err) {
    console.log("追加错误！！");
    console.log(err);
}
