// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "",
    id: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 用options接收传递过来的参数，如果没有是undefined，如果有是对象。
    if (options) {
      this.setData({
        name: options.name,
        id: options.id
      })
    }

  },
  showToast() {
    // 请提示，icon有none,success,error,loading四种
    wx.showToast({
      title: '显示提示',
      icon: "success"
    })
  },
  showModel() {
    wx.showModal({
      title: "警告",
      content: "您确认删除吗?",
      showCancel: true,
      confirmText: "删除",
      confirmColor: "#676899",
      cancelText: "取消",
      cancelColor: '#b4b4b4',
    })
  },
  showLoading() {
    wx.showLoading({
      title: 'loading...',
      mask: true
    })
    setTimeout(() => {
      wx.hideLoading({
        success: (res) => {},
      })
    }, 1000)
  },
  showMenu() {
    wx.showActionSheet({
      alertText: "选择专业",
      itemList: ["java", "php", "web"],
      itemColor: "#b4b4b4",
      success(res) {
        console.log(res);
      },
      fail(err) {
        console.log(err);
      }
    })
  },
  showNavLoading() {
    wx.showNavigationBarLoading({
      success: (res) => {
        console.log(res)
      },
    })
    setTimeout(() => {
      wx.hideNavigationBarLoading({
        success: (res) => {},
      })
    }, 2000)
  },
  setTitle() {
    wx.setNavigationBarTitle({
      title: '哈哈哈哈',
    })
  },
  setNavColor() {
    wx.setNavigationBarColor({
      frontColor: "#ffffff",
      backgroundColor: "#618923",
      animation: {
        duration: 2000,
        timingFunc: "liner"
      }
    })
  },
  showDot() {
    wx.showTabBarRedDot({
      index: 1,
    })
  },
  goRefresh() {
    wx.startPullDownRefresh({
      success: (res) => {
        console.log("开启下拉刷新")
      },
    })
    setTimeout(() => {
      wx.stopPullDownRefresh({
        success: (res) => {
          console.log("关闭下拉刷新")
        },
      })
    }, 300)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})