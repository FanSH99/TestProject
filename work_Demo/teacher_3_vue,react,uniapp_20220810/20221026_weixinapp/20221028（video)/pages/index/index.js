Page({
  data: {
    url: null
  },
  onLoad() {
    // 获取录音管理器，将录音管理器对象添加到this中
    this.recorderManager = wx.getRecorderManager();
    // 监听录音结束事件
    this.recorderManager.onStop((res) => {
      console.log(res);
      this.setData({
        url: res.tempFilePath
      })
    });
    wx.getLocation({
      success(res){
        console.log(res)
      }
    })
  },
  startVideo() {
    console.log('开始录音');
    console.log(this.recorderManager);
    // 开始录音
    this.recorderManager.start({
      format: "mp3",
    });
  },
  endVideo() {
    console.log('结束录音');
    // 停止录音
    this.recorderManager.stop();
  },
  playVideo(){
    // 获取录音音频管理器实例，
    let audioContext=wx.createInnerAudioContext();
    // 设置音频播放路径
    audioContext.src=this.data.url;
    // 播放音频
    audioContext.play();
  },
  playMusic(){
    let musicContext= wx.getBackgroundAudioManager();
    // 设置音频播放路径
    musicContext.src="http://m801.music.126.net/20221028171526/e67c81e76ff08560122a6355e23f74dc/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/14096521465/5dea/8632/d964/b149bd49eb62302951ae0e3183508bd8.mp3",
    musicContext.title="光辉岁月"
  },

  getInfo(){
    wx.getUserProfile({
      desc: '用于展示用户信息',
      success(res){
        console.log(res.userInfo)
      }
    })
  },
  getAdress(){
    wx.chooseAddress({
      success: (result) => {},
    })
  },
  openMap(){
    wx.openLocation({
      latitude: 34.111,
      longitude: 113.333,
    })
  },
  selLoation(){
    wx.chooseLocation();
  }
})
