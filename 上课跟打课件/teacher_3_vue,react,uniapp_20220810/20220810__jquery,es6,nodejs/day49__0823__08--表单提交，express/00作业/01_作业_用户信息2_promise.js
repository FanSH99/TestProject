let { writeFun } = require("./tools/writeFun");
let { readFun } = require("./tools/readFun");
// 2022年8月23日9:07:36

let list = [
    {
        name: "白浅",
        age: 19,
        sex: "女"
    },
    {
        name: "夜华",
        age: 17,
        sex: "男"
    },
    {
        name: "杀阡陌",
        age: 20,
        sex: "男"
    },
]


// 将用户信息写入user.json中

let writeUser = async (url) => {
    let res = await writeFun("./data/user.json", JSON.stringify(list));
    let data = await readFun("./data/user.json");
    data = JSON.parse(data);
    console.log(data);
    let obj = {
        name: "登登",
        age: 17,
        sex: "女"
    }
    data.push(obj);
    let newmsg = await writeFun("./data.user.json", JSON.stringify(data))
    let newData = data.filter(item => {
        return item.age > 18
    })

    let msg = await writeFun("./data/adult.json", JSON.stringify(newData))
    console.log(msg);

}

writeUser();