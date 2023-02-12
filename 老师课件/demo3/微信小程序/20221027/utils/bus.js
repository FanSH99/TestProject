let bus = {
    // 用来存放订阅回调
    list:[],
    // 发布者 参数一自定义事件名称 参数二发布的消息
    emit(name,msg){
        this.list.forEach(item=>{
            if(item.name === name){
                item.callback(msg)
            }
        })
    },
    // 订阅者 参数一自定义事件名称 参数二回调函数
    on(name,callback){
        this.list.push({
            name:name,
            callback:callback
        })
    }
}

// 微信小程序遵循的是common.js规范 node模块化
module.exports = bus;