//app.js
// 小程序应用实例
App({
  //小程序应用生命周期
  // 小程序初始化OnLaunch
  onLaunch(){
    console.log("小程序初始化");
  },
  // 小程序启动或切前台
  onShow(){
    console.log("小程序启动");
  },
  // 小程序切后台
  onHide(){
    console.log("监听小程序切换到后台");
  },
  onError(){
    console.log("小程序报错");
  },
  onPageNotFound(){
    console.log("页面不存在");
  },
  onThemeChange(){
    console.log("系统主题变化");
  },
  // 自定义方法
  getUser(){
    console.log("获取用户信息");
  },
  // 定义全局属性
  globdata:{
    like:"学习"
  }
})