let {getMusicPlayUrl,getMusicLyric} = require("../../api/player")
Page({
    data:{
        playList:[],
        // 当前播放歌曲索引
        playIndex:0,
        // 当前音乐的详细信息
        musicMsg: {
            name:"",
            id:0,
            picUrl:"",
            ar:""
        },
        // 当前音乐播放状态 为true表示播放中 为false表示暂停中
        isPlay:false,
        // 音乐播放模式 0表示随机播放 1 表示顺序播放 2 单曲循环
        palyState:0,
        // 歌曲播放路径
        playUrl:null,
        // 当前歌曲总时长
        duration:"00:00",
        // 当前音频播放时长
        currentTime:"00:00",
        // 当前播放百分比
        percent:0,
        // 当前歌曲歌词
        lyric:[],
        // 当前歌词所对应索引
        lyricIndex:0
    },
    onLoad(option){
        console.log(option)
          // 获取本地存储的播放列表
          let playList = wx.getStorageSync('playList') || []
        if(option.isRandom==='true'){
            this.setData({
                playList:playList,
                palyState:0
            },()=>{
             // 随机播放
            this.randomPlay();
            })
            return
        }
        // 获取当前要播放的歌曲索引
        let playIndex = option.playIndex || 0;
        this.setData({
            playList:playList,
            playIndex:playIndex
        },()=>{
            this.getMusicMsg();
        })
    },
    onShow(){
        let playList = wx.getStorageSync('playList');
        // 若没有播放列表
        if(!playList){
            wx.showToast({
              title: '请您先选择音乐！',
              icon:"none",
              success(){
                 setTimeout(()=>{
                    wx.switchTab({
                      url: '/pages/index/index',
                    })
                 },1000)
              }
            })
        }
    },
    // 获取当前要播放的音乐信息
    getMusicMsg(){
        let musicObj = this.data.playList[this.data.playIndex];
        // 处理歌手数据
        let ar = [];
        musicObj.ar.forEach(item=>{
            ar.push(item.name)
        })
        // 获取歌曲主要信息
        let musicMsg = {
            name:musicObj.name,
            // 音乐id
            id:musicObj.id,
            picUrl:musicObj.al.picUrl,
            ar:ar.join("、")
        }
       this.setData({
           musicMsg:musicMsg,
           duration:"00:00",
           currentTime:"00:00",
           percent:0,
           lyric:[],
           lyricIndex:0
       },()=>{
           this.getUrl();
           this.getLyric();
       })
    },
    // 获取当前歌曲播放路径
    async getUrl(){
        let res = await getMusicPlayUrl(this.data.musicMsg.id);
        if(!res.data.data[0].url){
            wx.showToast({
              title: 'vip歌曲不能播放',
              icon:"none",
              success:()=>{
                  setTimeout(()=>{
                    this.nextPlay();
                  },1000)
              }
            })
            return
        }
        this.setData({
            playUrl:res.data.data[0].url
        },()=>{
            this.playMusic();
        })
    },
    // 创建音频管理实例开始播放音频
    playMusic(){
        // 创建背景音频管理实例
        this.BackgroundAudioManager = wx.getBackgroundAudioManager();
        console.log(this.BackgroundAudioManager)
        // 设置播放路径
        this.BackgroundAudioManager.src=this.data.playUrl;
        // 设置音频标题
        this.BackgroundAudioManager.title = this.data.musicMsg.name;
        this.BackgroundAudioManager.singer = this.data.musicMsg.ar;
        this.BackgroundAudioManager.coverImgUrl = this.data.musicMsg.picUrl;
        // 监听音频开始播放 改变播放状态为true
        this.BackgroundAudioManager.onPlay(()=>{
            // 获取到当前音频播放时长 s
                 let duration = this.BackgroundAudioManager.duration;
                 this.getduration(duration)
            this.setData({
                isPlay:true
            })
        })
        // 监听音频暂停 改变播放状态为false
        this.BackgroundAudioManager.onPause(()=>{
            this.setData({
                isPlay:false
            })
        })
        //监听音频播放结束根据播放模式进行播放
        this.BackgroundAudioManager.onEnded(()=>{
            if(this.data.palyState === 0){
                this.randomPlay();
            }else if(this.data.palyState ===1){
                this.nextPlay();
            }else{
                this.getUrl();
            }
        })
        // 监听音频播放进度更新
        this.BackgroundAudioManager.onTimeUpdate(()=>{
            //  获取当前播放时长
            let currentTime = this.BackgroundAudioManager.currentTime;
            // console.log(currentTime)
            this.getcurrentTime(currentTime)
            // 获取百分比
            this.getpercent(currentTime);
            // 判断有没有歌词
            if(this.data.lyric.length>0){
                 // 根据当前播放时长查询歌词所对应索引
            let index = this.data.lyric.findIndex((item,index)=>{
                if(index===this.data.lyric.length-1){
                    return false
                }
                return currentTime>=item.time && currentTime<this.data.lyric[index+1].time 
            })
            if(index!=-1){
                this.setData({
                    lyricIndex:index
                })
            }
            }
           
        })
    },
    // 获取子组件传递过来的歌曲播放索引
    getPlayIndex(e){
        this.setData({
            playIndex:e.detail
        },()=>{
            this.getMusicMsg();
        })
    },
    // 暂停或播放音乐
    playOrPause(){
        this.setData({
            isPlay:!this.data.isPlay
        },()=>{
            if(this.data.isPlay){
                // 播放音乐
                this.BackgroundAudioManager.play();
            }else{
                // 暂停音乐
                this.BackgroundAudioManager.pause();
            }
        })
    },
    // 改变播放状态
    changeState(){
        this.data.palyState ++;
        if(this.data.palyState>2){
            this.data.palyState = 0
        }
        this.setData({
            palyState:this.data.palyState
        })
    },
    // 下一曲
    nextPlay(){
        // 播放索引++
        this.data.playIndex ++;
        if(this.data.playIndex>this.data.playList.length-1){
            this.data.playIndex = 0;
        }
        this.setData({
            playIndex:this.data.playIndex
        },()=>{
            this.getMusicMsg();
        })
    },
    // 上一期
    prePlay(){
        this.data.playIndex --;
        if(this.data.playIndex<0){
            this.data.playIndex = this.data.playList.length -1;
        }
        this.setData({
            playIndex:this.data.playIndex
        },()=>{
            this.getMusicMsg();
        })
    },
    // 随机播放
    randomPlay(){
        // 定义随机播放索引
        let playIndex = Math.floor(Math.random()*this.data.playList.length);
        this.setData({
            playIndex:playIndex
        },()=>{
            this.getMusicMsg();
        })
    },
    //获取当前歌曲播放总时长
    getduration(time){
    //  获取分钟
     let m = Math.floor(time / 60);
     m = m<10?"0"+m:m
    //  获取秒
    let s = Math.round(time % 60)
    s = s<10?"0"+s:s;
    let duration = m+":"+s
      this.setData({
          duration:duration
      })
    },
    // 获取当前播放时长
    getcurrentTime(time){
        let m = Math.floor(time / 60);
        m = m<10?"0"+m:m
       //  获取秒
       let s = Math.round(time % 60)
       s = s<10?"0"+s:s;
       let currentTime = m+":"+s;
       this.setData({
           currentTime:currentTime
       })
    },
    // 获取播放百分比
    getpercent(currentTime){
       let duration = this.BackgroundAudioManager.duration
        // 播放时长所占百分比 =  播放时长 / 总时长 * 100;
        let percent = currentTime / duration * 100
        this.setData({
            percent:percent
        })
    },
    //快进
    getSeek(e){
        // 百分比
        let percent = e.detail;
        // 获取当前播放时间 = 百分比 / 100 * 播放总时长
        let seekTime = percent / 100 * this.BackgroundAudioManager.duration;
        // 跳转到指定时长播放
        this.BackgroundAudioManager.seek(seekTime)
    },
    // 获取当前歌曲歌词
    async getLyric(){
        let res = await getMusicLyric(this.data.musicMsg.id);
        let lyricList = res.data.lrc.lyric.split("\n");
        // 存放处理好的歌词数据 [{msg:"慢慢的试着忘记",time:141.69}]
        let lyric = [];
        lyricList.forEach(item=>{
            if(item!=""){
                let itemList = item.split("]");
                let msg ="";
                if(itemList.length>1){
                   msg = itemList[1]
                }
                let time = itemList[0];
                let m = time.substr(1,2);
                let s = time.split(":")[1];
                let lyricTime = Number(m)*60 + Number(s);
                // console.log(lyricTime)
                let obj = {
                    time:lyricTime,
                    msg:msg
                }
                lyric.push(obj)
            }
        })
        console.log(lyric)
        this.setData({
            lyric:lyric
        })
    }
})