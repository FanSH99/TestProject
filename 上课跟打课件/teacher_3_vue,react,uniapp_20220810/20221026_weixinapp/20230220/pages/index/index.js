// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    id: 111,
    name: "白浅"
  },
  getSystem() {
    // 异步调用格式
    wx.getSystemInfo({
      success: (result) => {
        console.log("调用成功", result)
      },
      fail(error) {
        console.log("调用失败", error)
      },
      complete() {
        console.log("无论成功或者失败都会调用的回调函数");
      }
    })
  },
  getSystemAsync() {
    wx.getSystemInfoAsync({
      success: (result) => {
        console.log("调取成功", result)
      },
      fail(error) {
        console.log("调取失败", error)
      },
      complete() {
        console.log("无论成功或者失败都会调用的回调函数");
      }
    })
  },
  goCart() {
    // wx.switchTab只能跳转到tab页面，其中url前面需要加反斜杠 /pages/xx/xx 不能传参
    // 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面

    wx.switchTab({
      url: '/pages/cart/cart',
      success(res) {
        console.log("跳转成功", res);
      },
      fail(err) {
        console.log("跳转失败", err);
      },
      complete() {

      }
    })
  },
  goLaunch() {
    // 跳转到任意页面，可以用？拼接路径来传参，在onLoad中用options来接收
    // 关闭其他页面，打开到应用内的某个页面,支持es6语法模板字符串等
    wx.reLaunch({
      url: `/pages/cart/cart?id=${this.data.id}&name=` + this.data.name,
      success(res) {
        console.log("跳转成功", res);
      },
      fail(err) {
        console.log("跳转失败", err);
      },
      complete() {

      }
    })
  },
  goRedirectTo() {
    // 文档说不能跳转到tab页面，但是实验可以跳转到tab页面
    // 关闭当前页面，跳转到任意页面
    wx.redirectTo({
      url: '/pages/cart/cart?id=' + this.data.id + "&name=" + this.data.name,
      success(res) {
        console.log("跳转成功", res);
      },
      fail(err) {
        console.log("跳转失败", err);
      }
    })
  },
  goNavigator() {
    // 只能跳转到非tab页面，
    // 保留当前页面跳转到非tab页面，可以传递参数
    wx.navigateTo({
      url: '/pages/info/info?name=navigator&id=123',
      success(res) {
        console.log("成功", res);
      },
      fail(err) {
        console.log("跳转失败", err);
      },
      complete() {

      }
    })
  },
  showMenus(){
    // 显示转发按钮，分享到微信，分享到朋友圈
    wx.showShareMenu({
      menus:["shareAppMessage","shareTimeline"]
    })
  },
  sharePhoto(){
    wx.showShareImageMenu({
      path: '../../imgs/1.png',
      success(){

      },
      fail(){

      },
      complete(){
        
      }
    })
  }
})