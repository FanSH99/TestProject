let bus = require("../../utils/bus.js");
Component({
    data:{
        msg:"",
        name:"韩梦哥"
    },
    lifetimes:{
        attached(){
            // 订阅消息 参数一自定义事件名称 参数二回调函数
            bus.on("getmsg",(msg)=>{
                console.log(msg)
                this.setData({
                    msg
                })
            })
        }
    },
    methods:{
        senhmg(){
            this.triggerEvent("sendhmg",this.data.name)
        },
        init(){
            console.log("oneinit")
        }
    }
})