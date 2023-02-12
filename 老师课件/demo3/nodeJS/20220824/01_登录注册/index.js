let express = require("express");
// 导入自定义封装得读写模块儿
let {writeFun,readFun}=require("./tools/wirteReadFun")
let bodyParser = require("body-parser");
let web = express();
web.use(express.static("public"));
web.use(bodyParser.urlencoded({extended:true}));
web.post("/user/login",async (req,res)=>{
    // 获取用户登录得用户信息
    let {username,password} = req.body;
    console.log(username,password)
    try{
        let reslut = await readFun("./user.json");
        console.log(reslut)
        reslut = JSON.parse(reslut);
        let index = reslut.findIndex(item=>item.username == username);
        if(index==-1){
            res.send("当前用户未注册,请您先注册")
            return
        }
        console.log(reslut[index])
        if(username == reslut[index].username && password == reslut[index].password){
            res.send("恭喜您登录成功！！！！")
        }else{
            res.send("密码或用户名错误")
        }
        //  ？？？？
    }catch(err){
        console.log(err)
        //当前文件读取失败 证明没有任何用户注册
        res.send("该用户暂未注册")
    }
})

// 用户注册
web.post("/user/reg",async (req,res)=>{
     // 获取用户登录得用户信息
     let {username,password} = req.body;
     try{
        let reslut = await readFun("./user.json");
        reslut = JSON.parse(reslut);
        let index = reslut.findIndex(item=>item.username === username);
        console.log(index)
        if(index==-1){
        //   表示当前用户未注册
        //  先将用户信息添加到读到得数据列表中然后在重新写入
        reslut.push(req.body)
        let data = await writeFun("user.json",JSON.stringify(reslut));
        if(data=='写入成功'){
            res.send("恭喜你注册成功")
        }else{
            res.send("注册失败")
        }
        }else{
            res.send("当前用户已注册")
        }
     }catch(err){
        console.log(err)
        let data  = await writeFun("user.json",JSON.stringify([req.body]));
        if(data=='写入成功'){
            res.send("注册成功")
        }else{
            res.send("注册失败")
        }
     }
})
web.listen(8080,()=>{
    console.log("服务端已启动~~~~~~~~~~~~~~~~")
})

/* 
1. 编写登录接口
2. 提交表单到后端登录接口
3. 后端获取表单传递过来得参数
4. 判断当前用户名是否存在若不存在则未注册 若存在则判断用户名与密码是否一样若一样则登录成功若不一样则密码错误

*/

/* 
1. 编写用户注册接口
2. 提交表单到后端
3. 后端获取前端传递过来得注册信息
4. 读取存储用户信息得json文件若读取成功判断当前用户是否已注册 若读取失败则表示没有任何用户注册就可以将当前用户信息写入user.json 注册成功

*/