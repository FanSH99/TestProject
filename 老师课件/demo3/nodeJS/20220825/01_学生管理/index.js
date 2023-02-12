let express = require("express");
let bodyParser = require("body-parser");
let {writeFun,readFun} = require("./tools/writeReadFun")
let web = express();
web.use(express.static("public"));
web.use(bodyParser.urlencoded({extended:true}));
// 添加学生接口
web.post("/add/stu",async (req,res)=>{
//  获取前端传递的学生信息；
let studentMsg = req.body;
console.log(req.body)
try{
    let data = await readFun("student.json"); 
    // 若读取到数据则判断当前学生是否已添加
    data = JSON.parse(data);
    let index = data.findIndex(item=>item.name===req.body.name);
    if(index==-1){
        data.push(req.body);
        await writeFun("student.json",JSON.stringify(data));
        res.send("添加成功")
    }else{
        res.send("该学生已存在")
    }
}catch(err){
    // 表示当前不存在student.json
    let data = await writeFun("student.json",JSON.stringify([req.body]));
    if(data == '写入成功'){
        res.send("添加成功")
    }else{
        res.send("添加失败")
    }
}
})

// 获取学生列表
web.get("/get/list",async (req,res)=>{
    try{
    let data = await readFun("student.json");
    res.send(JSON.parse(data))
    }catch(err){
        res.send([])
    }
})

// 删除学生信息
web.get("/remove/stu",async (req,res)=>{
    let data = await readFun("student.json");
    data = JSON.parse(data);
    // 获取前端传递过来的要删除的学生姓名
    let name = req.query.name;
    // 找到要删除的学生信息所对应的索引
    let index = data.findIndex(item=>item.name === name);
    if(index!=-1){
        data.splice(index,1);
        await writeFun("student.json",JSON.stringify(data));
        res.send("删除成功")
    }else{
        res.send("该学生不存在")
    }
})
web.listen(8080,function(){
    console.log("服务端已启动...................")
})

/* 
 添加学生：
 后端业务逻辑：
 1. 获取前信端传递过来的学生息。
 2. 判断当前存储的数据列表中是否存在当前学生若存在则表示改学生信息已存在若不存在则写入文件添加成功
 
 前端业务逻辑：
 1. 点击确认添加获取输入框的所有内容
 2. 将输入框内容以http请求的方式传递给后端
 3. 获取后端返回的信息确认是否添加成功
*/
/* 
删除学生:
 1. 读取所有学生信息
 2. 获取前端要删除学生的姓名
 3. 根据学生姓名找到要删除的学生信息所对应的索引
 4. 更具索引删除数组中的元素
 5. 将删除后的数据重新写入
*/