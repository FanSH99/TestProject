// pages/watch/watch.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  getOneCom(){
    let onecom=this.selectComponent(".onecom")
    // 获取子组件中的数据
    console.log(onecom.data.list);
    // 调用子组件中方法
    onecom.init();
    let twocom=this.selectComponent(".twocom");
    twocom.add();
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