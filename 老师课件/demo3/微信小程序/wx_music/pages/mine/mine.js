Page({
    data:{
        userInfo:null
    },
    getUserInfo(){
        // 获取用户微信信息
        wx.getUserProfile({
          desc: '展示用户微信信息',
          success:(res)=>{
              console.log(res)
              this.setData({
                userInfo:res.userInfo
              })
          }
        })
    },
    scan(){
        wx.scanCode({
            success(res){
                console.log(res)
            }
        })
    },
    tell(){
        wx.makePhoneCall({
          phoneNumber: '15518835995',
        })
    },
    openMap(){
       wx.getLocation({
        success(res){
            console.log(res)
            wx.openLocation({
              latitude: res.latitude,
              longitude: res.longitude,
            })
        }
       })
    },
    chooseMap(){
        wx.chooseLocation({
          success(res){
            console.log(res)
          }
        })
    },
    chooseAddress(){
        wx.chooseAddress({
          success: (result) => {
              console.log(result)
          },
        })
    },
    // 用户登录
    Login(){
        wx.login({
            success(res){
                // 获取code
                console.log(res.code)
                wx.request({
                  url: 'http://localhost:3000/userlogin?code='+res.code,
                  method:"GET",
                  success(res){
                      console.log(res)
                      wx.setStorage({
                          key:"token",
                          data:res.data.data.token
                      })
                  }
                })
            }
        })
    },
    getOpenid(){
        let token = wx.getStorageSync('token');
        wx.request({
          url: 'http://localhost:3000/get/openid?token='+token,
          method:"GET",
          success(res){
              console.log(res)
          }
        })
    }
})