let {getTopInfo} = require("../../api/index")
Page({
    data:{
        list:[],
        imgurl:"",
    },
    async onLoad(option){
        // 获取页面传递榜单id
        let id = option.id;
        // 发送请求获取榜单详情
        let res = await getTopInfo(id);
        // 获取榜单名称
        let topname = res.data.playlist.name;
        wx.setNavigationBarTitle({
          title: topname,
        })
        this.setData({
            list:res.data.playlist.tracks,
            imgurl:res.data.playlist.tracks[0].al.picUrl
        })
    },
    // 去播放
    goPlayer(e){
        // 获取当前点击的歌曲索引
        let index = e.currentTarget.dataset.index;
        // 将当前榜单列表存储到本地播放列表中
        wx.setStorage({
            key:"playList",
            data:this.data.list,
            success(){
                // 将要播放的歌曲索引传递到播放页面
                wx.reLaunch({
                    url: '/pages/player/player?playIndex='+index,
                  })
            }
        })
    },
    randomPlay(){
        wx.setStorage({
            key:"playList",
            data:this.data.list,
            success(){
                // 跳转到正在播放页面
                wx.reLaunch({
                  url: '/pages/player/player?isRandom='+true,
                })
            }
        })
    }
})