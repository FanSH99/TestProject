let express = require("express");
let router = express.Router();
let {writeFun,readFun} = require("../tools/writeReadFun")
// 发表论坛
router.post("/send/msg",async (req,res)=>{
    // 获取前端传递得请求参数
    req.body;
    // username time img_url content list id(唯一标识 数组长度加一定义 )
    // 读取论坛列表
    let data = await readFun("./data/msgList.json");
    // 将读取到得字符串转化为对象
    data = JSON.parse(data);
    req.body.list = [];
    req.body.id = data.length+1;
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
    let index = req.query.index;
    data.splice(index,1);
    await writeFun("./data/msgList.json",JSON.stringify(data));
    res.send({code:0,msg:"删除成功",data:data})
})

// 评论论坛
router.post("/pinglun/msg",async (req,res)=>{
    // 读取论坛列表
    let data  = await readFun("./data/msgList.json");
    data = JSON.parse(data);
    // 获取当前要评论索引
    let index = req.body.index;
    // 根据索引找到要评论得数据
    data[index].list.unshift(req.body)
    await writeFun("./data/msgList.json",JSON.stringify(data));
    res.send({
        code:0,
        msg:"评论成功"
    })
})
module.exports = router;