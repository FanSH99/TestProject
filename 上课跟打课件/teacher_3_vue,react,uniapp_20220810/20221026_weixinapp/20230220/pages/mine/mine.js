// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: ""
  },

  sendGetHttp() {
    // 发送http请求，默认get请求
    // 注意，右上角详情，本地设置，不校验http域名，否则不能发送请求
    wx.request({
      // 请求路径
      url: 'https://apif.java.crmeb.net/api/front/index',
      // 请求参数
      data: null,
      header: "",
      method: "GET",
      success(res) {
        console.log(res);
      },
      fail(err) {
        console.log("请求失败", err);
      }

    })
  },
  sendPostHttp() {
    wx.request({
      url: 'https://api.it120.cc/xiaochengxu/shop/goods/list',
      data: {
        pingtuan: false,
        kanjia: false
      },
      method: "POST",
      success(res) {
        console.log(res);
      },
      fail(err) {
        console.log("请求时标", err);
      }
    })
  },
  sendCode() {
    wx.request({
      url: 'https://apif.java.crmeb.net/api/front/sendCode',
      data: {
        phone:"15138607803"
      },
      method: "POST",
      header: {
        "content-type":"application/x-www-form-urlencoded"
      },
      success(res) {
        console.log(res);
      },
      fail(err) {
        console.log("请求失败", err);
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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