// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    marker:[
      {
          latitude:"113.57358121643065",
          longitude:"34.813588275899974",
          iconPath:"https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/67550/26/12426/5094/5d9c4b13Eea435a3f/81328b0609c60a3c.png"
      }
  ]
  },
  getRequest() {
    // get请求
    wx.request({
      url: 'https://apif.java.crmeb.net/api/front/index',
      data: null,
      method: "GET",
      success(res) {
        console.log(res)
      },
      fail(err) {
        console.log('请求失败', err)
        //request:fail url not in domain list，域名不合法
        // 解决办法，右上角详情--本地设置--不校验合法域名打上对钩
      }
    })
  },
  postRequest() {
    wx.request({
      url: 'https://api.it120.cc/xiaochengxu/shop/goods/list',
      method: "POST",
      data: {
        pintuan: false,
        kanjia: false,
      },
      success(res) {
        console.log(res)
      }
    })
  },
  sendCode() {
    wx.request({
      url: 'https://apif.java.crmeb.net/api/front/sendCode',
      method: 'POST',
      data: {
        phone: 15138607803
      },
      header: {
        "content-type": "application/x-www-form-urlencoded"
      }
    })
  },
  setStorage() {
    // 异步本地存储数据，可以存储任意类型
    wx.setStorage({
      key: "user",
      data: {
        name: "张三",
        age: 18
      },
      // 是否开启加密存储，加密需要最低版本2.22
      encrypt: true,
      success() {
        console.log("存储成功");
      }
    })
    // 同步存储
    wx.setStorageSync('id', 110);
  },
  getStorage() {
    // 异步获取本地存储
    wx.getStorage({
      key: "user",
      success(res) {
        console.log(res.data)
      }

    })
    // 同步获取
    let token = wx.getStorageSync('token')
    console.log(token)
  },
  saveImg() {
    wx.saveImageToPhotosAlbum({
      filePath: '../../imgs/1.jpg',
      success() {
        console.log("保存成功");
      },
      fail(err) {
        console.log('保存失败', err);//saveImageToPhotosAlbum:fail auth deny
      }
    })
  },
  priviewImg(){
    // 只能预览网络图片
    wx.previewImage({
      urls: ["https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/67550/26/12426/5094/5d9c4b13Eea435a3f/81328b0609c60a3c.png","https://api.java.crmeb.net/crmebimage/public/content/2022/08/04/0f78716213f64bfa83f191d51a832cbf73f6axavoy.jpg"],
      showmenu:true,
      current:"https://api.java.crmeb.net/crmebimage/public/content/2022/08/04/0f78716213f64bfa83f191d51a832cbf73f6axavoy.jpg",
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    // 获取地图上下文实例对象
    let mapContext = wx.createMapContext('mymap', this);
    console.log(mapContext);
    console.log(mapContext.getCenterLocation());
    // 设置定位点图标
    mapContext.setLocMarkerIcon({
      iconPath: "",
      success(res) {
        console.log('调用成功', res);
      },
      fail(err) {
        console.log("调用失败", err);
      }
    })
    // 获取经纬度
    mapContext.getCenterLocation({
      iconPath: "",
      success(res) {
        console.log(res);
      }
    })
    this.CameraContext = wx.createCameraContext();
  },
  paizhao(){
    this.CameraContext.takePhoto({
        success(res){
            console.log(res)
        }
    })
},
openClose(){
  wx.chooseImage({
    count: 1,
    sourceType:['album', 'camera'],
    success(res){
        console.log(res)
      //   保存到相册
      wx.saveImageToPhotosAlbum({
        filePath: res.tempFilePaths[0],
        success(){
            console.log("调用成功")
        }
      })
    }
  })
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