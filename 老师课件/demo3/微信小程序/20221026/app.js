// app.js
// 小程序应用实例
App({
    // 小程序应用生命周期
    // 小程序初始化调用
    onLaunch(){
        console.log("小程序初始化")
    },
    onShow(){
        console.log("小程序启动")
    },
    onHide(){
        console.log("监听小程序切换到后台")
    },
    onError(){
        console.log("小程序报错")
    },
    onPageNotFound(){
        console.log("页面不存在触发")
    },
    // 自定义方法
    getUser(){
        console.log("获取用户信息")
    },
    globdata:{
        like:"游戏"
    }
})