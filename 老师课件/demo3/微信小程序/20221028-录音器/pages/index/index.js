Page({
    data:{
        url:null
    },
    onLoad(){
        // 获取录音管理器 将录音管理器对象添加到this中
        this.RecorderManager = wx.getRecorderManager();
        // 监听录音结束
        this.RecorderManager.onStop((res)=>{
            console.log(res)
            this.setData({
                url:res.tempFilePath
            })
        })
        // 开始定位
        wx.getLocation({
          success(res){
            console.log(res)
          }
        })
    },
    start(){
        console.log("开始录音")
        // console.log(this.RecorderManager)
        // 开始路由
        this.RecorderManager.start({
            format:"mp3"
        });
    },
    end(){
        // 停止录音
        this.RecorderManager.stop();
        console.log("结束录音")
    },
    playUrl(){
        // 获取音频播放管理器实例
        let audioContext = wx.createInnerAudioContext();
        // 设置音频播放路径
        audioContext.src = this.data.url;
        // 开始播放录音
        audioContext.play();
    },
    playMusic(){
        let context =  wx.getBackgroundAudioManager();
        // 设置播放地址
        context.src='http://m801.music.126.net/20221028171526/e67c81e76ff08560122a6355e23f74dc/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/14096521465/5dea/8632/d964/b149bd49eb62302951ae0e3183508bd8.mp3'
        context.title = '光辉岁月'
    },
    getUserInfo(){
        wx.getUserProfile({
          desc: '用于展示用户信息',
          success(res){
            console.log(res.userInfo)
          }
        })
    },
    getAdress(){
        wx.chooseAddress()
    },
    openMap(){
        wx.openLocation({
          latitude: 34.820987102856726,
          longitude: 113.96385335693358,
        })
    },
    clooseLocation(){
        wx.chooseLocation()
    }
})