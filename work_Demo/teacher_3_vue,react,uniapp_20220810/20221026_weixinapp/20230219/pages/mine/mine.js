// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    to: 0,
    nodes: "<p>111<span>111<span><p>",
    checkbox: ["摄影", "看书", "游戏"],
    range1: ["java", "php", "大数据"],
    range2: [{
        name: "web前端",
        id: 1
      },
      {
        name: "java开发",
        id: 2
      },
      {
        name: "大数据开发",
        id: 3
      }
    ],
    name: "",
    city: ""
  },

  toScroll(e) {
    this.setData({
      to: e.currentTarget.dataset.index
    })
  },
  changeCheck(e) {
    console.log(e.detail.value);
  },
  changeSelect(e) {
    console.log(e.detail.value);
    console.log("您选择的专业为：", this.data.range2[e.detail.value].name);
    this.setData({
      name: this.data.range2[e.detail.value].name
    })
  },
  changeCity(e) {
    console.log(e.detail.value.join(""));
    this.setData({
      city: e.detail.value.join("")
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