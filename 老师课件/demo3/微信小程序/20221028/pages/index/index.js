Page({
    data:{
        id:119
    },
    getSysm(){
        // 异步获取系统信息
        wx.getSystemInfo({
            success(res){
                console.log(res)
            },
            fail(err){
                console.log("调用是失败",err)
            },
            complete(){
                console.log("无论成功失败都会调用的回调函数")
            }
        })
        // 同步获取
        // let res = wx.getSystemInfoSync();
        // console.log(res)
    },
    goTab(){
        // 跳转到tab页面 路径后不能带参数。
        wx.switchTab({
          url: '/pages/mine/mine',
          success(){
                console.log("调用成功")
          }
        })
    },
    goreLaunch(){
        // 关闭其他页面跳转到任意页面 可以传递参数 参数拼接到路径
        wx.reLaunch({
          url:`/pages/info/info?name=李四&id=${this.data.id}`,
        })
    },
    goRe(){
        // 关闭当前页面跳转到任意页面 可以传递参数
        wx.redirectTo({
          url: '/pages/info/info?name=哈哈哈哈&id=1111',
        })
    },
    goInfo(){
        // 保留当前页面跳转到非tab页面 可以传递参数 页面栈最多十层
        wx.navigateTo({
          url: '/pages/info/info?name=navigateTo&id=121221',
        })
    },
    showMenus(){
        wx.showShareMenu({
          menus: ["shareAppMessage","shareTimeline"],
        })
    },
    shareImg(){
        wx.showShareImageMenu({
          path: '../../imgs/1.jpeg',
        })
    },
    showToast(){
        wx.showToast({
          title: '嘿嘿嘿',
          icon:"none",
          mask:false
        })
    },
    showModel(){
        wx.showModal({
            title: '警告',
            content:"您确认删除吗？",
            showCancel:true,
            cancelText:"取消",
            cancelColor:"#444",
            confirmText:"删除",
            confirmColor:"#456564"    
        })
    },
    showLoading(){
        wx.showLoading({
          title: '加载中',
          mask:true
        })
        setTimeout(()=>{
            wx.hideLoading()
        },2000)
    },
    showAction(){
        wx.showActionSheet({
            alertText:"选择专业",
          itemList: ["前端开发","java开发","游戏开发"],
          itemColor:"#444",
          success(res){
            console.log(res.tapIndex)
          }
        })
    },
    showNavloading(){
        wx.showNavigationBarLoading();
        setTimeout(()=>{
            // 隐藏导航加载动画
            wx.hideNavigationBarLoading()
        },2000)
    },
    setTitle(){
        wx.setNavigationBarTitle({
          title: '哈哈哈哈',
        })
    },
    setColor(){
        wx.setNavigationBarColor({
            frontColor:"#ffffff",
            backgroundColor:"#666666",
            animation:{
                duration:300,
                timingFunc:"linear"
            }
        })
    },
    showDot(){
        wx.showTabBarRedDot({
          index: 2,
        })
    },
    goRefresh(){
        wx.startPullDownRefresh({
          success: (res) => {
              console.log("开始下啦刷新啦")
              setTimeout(()=>{
                  wx.stopPullDownRefresh()
              },2000)
          },
        })
    }
})