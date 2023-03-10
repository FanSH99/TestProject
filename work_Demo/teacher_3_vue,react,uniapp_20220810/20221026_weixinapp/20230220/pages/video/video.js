// pages/video/video.js

let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url: null,
    user: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 页面加载就获取录音管理器，将录音管理器对象添加道this中。
    this.RecorderManager = wx.getRecorderManager();
    // 监听录音结束
    this.RecorderManager.onStop((res) => {
      console.log(res);
      this.setData({
        url: res.tempFilePath
      })
    })
    this.context = wx.getBackgroundAudioManager();
    // 开始定位
    wx.getLocation({
      success(res) {
        console.log(res)
      },
      fail(err) {
        console.log(err);
      }
    })

  },

  startVideo() {
    console.log("开始录音");
    console.log(this.RecorderManager);
    this.RecorderManager.start({
      format: "mp3"
    });
  },
  endVideo() {
    console.log("结束录音");
    this.RecorderManager.stop();
  },
  playVideo() {
    // 播放音频
    // 获取音频播放管理器实例
    let audio = wx.createInnerAudioContext();
    //  设置音频播放路径
    audio.src = this.data.url;
    // 开始播放
    audio.play();
  },
  // playMusic() {
  //   // 获取音频对象，

  //   // 设置播放地址
  //   this.context.src = 'http://dl.stream.qqmusic.qq.com/C4000046mgx23IOIWx.m4a?guid=3436420225&vkey=C87B6BAD64ED813C21212D2BB26040BFA16A90B63C8407644916878982B906C15ED12980CE9B0FC352DB0CAD64D2EC25AB01F6113D039D41&uin=&fromtag=120032'
  //   // 设置播放名称
  //   this.context.title = '羡慕';
  // },
  playMusic(e) {
    console.log(e.target.dataset);
    this.context.src = e.target.dataset.src;
    this.context.title = e.target.dataset.title;
  },
  endMusic() {
    this.context.stop();
  },
  getUserInfo() {
    wx.getUserProfile({
      desc: '用于展示用户信息',
      success(res) {
        // app.globalData.userInfo=res.userInfo
        this.setData({
          user: res.userInfo
        })
      }
    })
  },
  getAddress() {

    wx.chooseAddress({
      success: (result) => {
        console.log(result)
      },
    })
  },
  openMap() {
    wx.openLocation({
      latitude: 34.820985,
      longitude: 113.96385,
    })
  },
  chooseLocation() {
    wx.chooseLocation({})
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