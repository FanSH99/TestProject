Component({
    properties:{
        playIndex:Number,
        isPlay:Boolean,
        palyState:Number
    },
    options:{
        // 是否引入全局样式在组件中生效
        addGlobalClass:true
    },
    data:{
        isShowPlaylist:false,
        playList:[],
    },
    lifetimes:{
        attached(){
            // 获取本地的播放列表
            let playList = wx.getStorageSync('playList') || [];
            this.setData({
                playList:playList
            })
        }
    },
    methods:{
        showPlayList(){
            this.setData({
                isShowPlaylist:true
            })
        },
        close(){
            this.setData({
                isShowPlaylist:false
            })
        },
        playMusic(e){
            // 获取要播放的索引
            let playIndex = e.currentTarget.dataset.index;
            // 将当前要播放的音乐索引传递给父组件
            this.triggerEvent("sendindex",playIndex)
        },
        playOrPause(){
            // 向父组件发送自定义事件 让父组件改变播放状态
            this.triggerEvent("playOrPause")
        },
        // 改变播放状态
        changeState(){
            this.triggerEvent("changeState")
        },
        // 下一曲
        nextPlay(){
            //向父组件发送自定义事件让父组件将播放索引++
            this.triggerEvent("nextPlay")  
        },
        prePlay(){
            this.triggerEvent("prePlay")
        }
    }
})