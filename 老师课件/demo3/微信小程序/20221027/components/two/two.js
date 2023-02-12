let bus = require("../../utils/bus")
Component({
    options:{
        // 定义纯数据字段的匹配规则  a开头的属性为纯数据字段 
        // 所谓纯数据字段就是不会在页面渲染使用 
        pureDataPattern:/^a/
    },
    data:{
        title:"学习使我快乐",
        num:0,
        user:{
            name:"张三",
            age:18
        },
        // 纯数据字段
        ang:1000
    },
    properties:{
        myname:String
    },
    methods:{
        senMsg(){
            // 发布消息
            bus.emit("getmsg",this.data.title)
        },
        add(){
            this.data.num++;
            this.setData({
                num:this.data.num,
                user:{
                    name:"张三",
                    age:20
                }
            })
        }
    },
    // 监听组件中属性的改变
    observers:{
        num:function(newval){
            console.log("我改变啦",newval)
        },
        // 监听对象中的某个属性
        "user.age":function(newval){
            console.log("我改变啦",newval)
        }
    }
})