// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    id:''
  },
  // 获取系统信息，参数1成功回调，参数2失败回调，参数3成功失败都会调用。
  getSysm() {
    wx.getSystemInfo({
      success(result) {
        console.log(result)
      },
      fail(err) {
        console.log('调用失败', err);
      },
      complete() {
        console.log('无论成功失败都会调用');
      }
    })
    // 同步获取  ，有回调函数是异步代码,是个promise函数
    // let res=wx.getSystemInfo();
    // console.log(res);
  },
  goTab() {
    // switchtab只能跳转到tab页面---路径后不能携带参数
    // 这种方法不能页面传参
    wx.switchTab({
      url: '/pages/mine/mine',
      success() {
        console.log('跳转成功');
      }
    })
  },
  goRelauch(){
    // reLaunch可以跳转到任意页面
wx.reLaunch({
  url: `/pages/info/info?name=张三&id=${this.data.id}`,
})
  },
  goRe(){
    wx.redirectTo({
      url: '/pages/mine/mine?name=哈哈哈哈&id=111',
    })
  },
  goInfo(){
    // 跳转到非tab页面，可以返回，可以传参
wx.navigateTo({
  url: '/pages/info/info?name=女郎&id=222',
})
  },
  showMenus(){
wx.showShareMenu({
  menus: ["shareAppMessage","shareTimeline"],
})
  },
  shareImg(){
wx.showShareImageMenu({
  path:'../../imgs/1.jpg',
})
  },
 showToast(){
  wx.showToast({
    title: 'title',
    duration: 0,
    icon: icon,
    image: 'image',
    mask: true,
    success: (res) => {},
    fail: (res) => {},
    complete: (res) => {},
  })
 },
 showModel(){
wx.showModal({
  title:"警告",
  content:"您确定删除吗",
  showCancel:true,
  cancelText:'取消',
  cancelColor: '#444',
  confirmText:'删除',
  confirmColor:'#679900'
})
 },
 showLoading(){
wx.showLoading({
  title: '加载中......',
  mask:true,
})
setTimeout(()=>{
  wx.hideLoading();
},2000)
 },
 showAction(){
wx.showActionSheet({
  alertText:'选择专业',
  itemList: ['前端开发','java开发','游戏开发'],
  itemColor:'#444',
  success(res){
    console.log(res);
  }
})
 },
 showNavLoading(){
wx.showNavigationBarLoading({
  success: (res) => {
    console.log(res)
  },
})
setTimeout(()=>{
  wx.hideNavigationBarLoading();
},2000)
 },
 setTitle(){
wx.setNavigationBarTitle({
  title: '微信小程序',
})
 },
 setColor(){
wx.setNavigationBarColor({
  backgroundColor: '#666666',
  frontColor: '#ffffff',
  animation:{
    duration:300,
    timingFunc:'linear'
  }
})
 },
 showDot(){
wx.showTabBarRedDot({
  index: 1,
})
 },
 refresh(){
wx.startPullDownRefresh({
  success: (res) => {
    console.log('开始下拉刷新了',res)
    setTimeout(()=>{
      wx.stopPullDownRefresh({
        success: (res) => {
          console.log('停止下拉刷新')
        },
      })
    },2000)
  },
})
 },
  // 事件处理函数
  bindViewTap() {

  },
  onLoad() {

  },


})
