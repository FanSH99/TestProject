let {getMvurl} = require("../../api/index")
Page({
    data:{
        mvList:[],
        current:0,
        // 存放 每个mv对应的video上下文实例
        videoContextList:[]
    },
    onLoad(option){
        let videoContextList = [];
        // 获取本地存储的热门mv列表
        let mvList = wx.getStorageSync('hotMvList');
        mvList.forEach((item,index)=>{
            item.playUrl = "";
            let videoContext = wx.createVideoContext("myvideo"+index);
            videoContextList.push(videoContext)
        })
        console.log(mvList)
        this.setData({
            mvList:mvList,
            current:option.index,
            videoContextList:videoContextList
        },()=>{
            this.getPlayUrl();
        })
    },
    // 获取要播放的mv路径
    async getPlayUrl(){
        // 获取当前要播放的mv索引
        let index = this.data.current;
        // 获取当前要播放的mvid
        let id = this.data.mvList[index].id;
        let res = await getMvurl(id);
        console.log(res.data.data.url)
        this.data.mvList[index].playUrl = res.data.data.url;
        console.log(this.data.mvList)
        this.setData({
            mvList:this.data.mvList
        },()=>{
            this.data.videoContextList[index].play();
        })
    },
    currentChange(e){
        console.log(e.detail.current)
        // 将所有的音频暂停播放
        this.data.videoContextList.forEach(item=>{
            item.pause();
        })
        this.setData({
            current:e.detail.current
        },()=>{
            this.getPlayUrl();
        })
    }
})