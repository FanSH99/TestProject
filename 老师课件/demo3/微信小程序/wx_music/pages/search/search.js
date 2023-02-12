let {getHotSearch,searchMusic} = require("../../api/index")
Page({
    data:{
        hotList:[],
        keyWords:"",
        isRequest:false,
        songsList:[]
    },
    async onLoad(){
        // 获取热门搜索
        let res = await getHotSearch();
        console.log(res)
        this.setData({
            hotList:res.data.result.hots
        })
    },
     search(){
        if(this.data.keyWords ===''){
            this.setData({
                songsList:[]
            })
        }
        if(this.data.isRequest){
            return 
        }
        this.setData({
            isRequest:true,
        })
        searchMusic(this.data.keyWords).then(res=>{
            if(res.data.code !== 200){
                return
            }
            console.log(res.data.result.songs)
            this.setData({
                songsList:res.data.result.songs,
                isRequest:false
            })
        })
    },
    goSearch(e){
        console.log(e.currentTarget.dataset.tag)
        this.setData({
            keyWords:e.currentTarget.dataset.tag
        },()=>{
            this.search();
        })
    },
    goPlayer(e){
        let index = e.currentTarget.dataset.index;
        let musicobj = this.data.songsList[index]
        console.log(musicobj)
        let musicMsg = {
            al:{
                name:musicobj.album.name,
                picUrl:musicobj.album.artist.img1v1Url
            },
            ar:musicobj.artists,
            id:musicobj.id,
            name:musicobj.name
        }
        let playList = wx.getStorageSync('playList') || [];
        playList.unshift(musicMsg);
        wx.setStorage({
            key:"playList",
            data:playList,
            success(){
                wx.reLaunch({
                  url: '/pages/player/player',
                })
            }
        })
    }
})