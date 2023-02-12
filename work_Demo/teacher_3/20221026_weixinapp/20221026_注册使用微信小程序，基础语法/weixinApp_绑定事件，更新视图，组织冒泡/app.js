// app.js

App({
  onLaunch() {
    // 只会执行一次。
    console.log('小程序初始化');
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  onShow(){
console.log('小程序启动');
  },
  onHide(){
console.log('小程序切换到后台');
  },
  onError(){
console.log('监听到小程序报错');
  },
  onPageNotFound(){
console.log('页面不存在触发');
  },
  // 自定义方法
  getUser(){
console.log('获取用户信息');
  },
  globalData: {
    userInfo: null
  },
  globdata:{
    like:"游戏"
}
})
