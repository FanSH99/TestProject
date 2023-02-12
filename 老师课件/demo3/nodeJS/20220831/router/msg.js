let express = require("express");
let router = express.Router();
let {writeFun,readFun} = require("../tools/writeReadFun")
// 发表论坛
router.post("/send/msg",async (req,res)=>{
    // 获取前端传递得请求参数
    // req.body;
    // username time img_url content list id(唯一标识 数组长度加一定义 )
    // 读取论坛列表
    let data = await readFun("./data/msgList.json");
    // 将读取到得字符串转化为对象
    data = JSON.parse(data);
    req.body.list = [];
    // 将前端传递过来得所有参数存放到 data中在将data重新写入
    data.unshift(req.body);
    
    await writeFun("./data/msgList.json",JSON.stringify(data));
    res.send({
        code:0,
        msg:"发布成功"
    })
})

// 获取论坛信息
router.get("/get/list",async (req,res)=>{
    let data = await readFun("./data/msgList.json");
    data = JSON.parse(data);
    res.send({
        code:0,
        msg:"获取成功",
        data:data
    })
})

// 删除论坛信息
router.get("/remove/msg",async (req,res)=>{
    let data  = await readFun("./data/msgList.json");
    data = JSON.parse(data);
    let time_str = req.query.time_str;
    // 根据当前论坛时间戳查询到当前要删除得索引
    let index = data.findIndex(item=>item.time_str === time_str);
    data.splice(index,1);
    await writeFun("./data/msgList.json",JSON.stringify(data));
    res.send({code:0,msg:"删除成功"})
})

// 评论论坛
router.post("/pinglun/msg",async (req,res)=>{
    // 读取论坛列表
    let data  = await readFun("./data/msgList.json");
    data = JSON.parse(data);
    // 获取当前要评论索引
    let time_str = req.body.time_str;
    let index = data.findIndex(item=>item.time_str === time_str);
    // 根据索引找到要评论得数据
    data[index].list.unshift(req.body)
    await writeFun("./data/msgList.json",JSON.stringify(data));
    res.send({
        code:0,
        msg:"评论成功"
    })
})

// 获取用户论坛列表信息
router.get("/user/msg", async (req,res)=>{
    //  获取当前客户端传递得用户名
    let username = req.query.username;
    // 读取所有论坛信息
    let data = await readFun("./data/msgList.json");
    data = JSON.parse(data);
    // 将满足username相等这个条件得消息存放到新的数组中；
    let newData = data.filter(item=>item.username === username);
    // 读取用户列表
    let userList = await readFun("./data/user.json");
    userList = JSON.parse(userList);
    let index = userList.findIndex(item=>item.username === username);
    let img_url = userList[index].img_url;
    res.send({
        code:0,
        data:newData,
        img_url
    })
})

// 查询论坛
router.get("/search/msg",async (req,res)=>{
    let keywords = req.query.keywords;
    let data = await readFun("./data/msgList.json");
    data = JSON.parse(data);
    let newData = data.filter(item=>item.content.includes(keywords))
    res.send({
        code:0,
        msg:"查询成功",
        data:newData
    })
})
module.exports = router;