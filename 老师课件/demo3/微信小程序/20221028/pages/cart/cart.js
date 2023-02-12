
Page({
    data:{
        marker:[
            {
                latitude:"113.57358121643065",
                longitude:"34.813588275899974",
                iconPath:"https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/67550/26/12426/5094/5d9c4b13Eea435a3f/81328b0609c60a3c.png"
            }
        ]
    },
    getRequest(){
        // 右上角=>详情=>本地设置=>将不校验合法域名打上对勾
        // 发送http请求
        wx.request({
            //请求地址
          url: 'https://apif.java.crmeb.net/api/front/index',
        //   请求参数
          data:null,
        //   请求方式
          method:"GET",
        //   请求成功的回调函数
          success(res){
            console.log(res)
          },
          fail(err){
            console.log("请求失败回调"+err)
          }
        })
    },
    sendPost(){
        wx.request({
          url: 'https://api.it120.cc/xiaochengxu/shop/goods/list',
          method:"POST",
          data:{
              pingtuan:false,
              kanjia:false
          },
          success(res){
              console.log(res)
          }
        })
    },
    sendCode(){
        // wx.request({
        //   url: 'https://apif.java.crmeb.net/api/front/sendCode',
        //   method:"POST",
        // //   设置请求头
        //   header:{
        //       "content-type":"application/x-www-form-urlencoded"
        //   },
        //   data:{
        //     phone:15518835995
        //   },
        //   success(res){
        //       console.log(res)
        //   }
        // })
    },
    setStorge(){
        // 异步本地存储数据
        wx.setStorage({
            key:"user",
            data:"张三",
            success(){
                console.log("存储成功")
            }
        })
        // 同步存储
        wx.setStorageSync('id', 110)
    },
    getStorge(){
        // 异步获取本地存储指定key
        wx.getStorage({
            key:"user",
            success(res){
                console.log(res.data)
            }
        })
        //  同步获取
        let id = wx.getStorageSync('id')
    },
    onReady(){
        // 获取地图上下文对象
        this.mapContext = wx.createMapContext('mymap', this);
     
        this.mapContext.getCenterLocation({
            success(res){
                console.log(res)
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
    showimgs(){
        wx.previewImage({
          urls: ["https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/67550/26/12426/5094/5d9c4b13Eea435a3f/81328b0609c60a3c.png","https://api.java.crmeb.net/crmebimage/public/content/2022/08/04/0f78716213f64bfa83f191d51a832cbf73f6axavoy.jpg"],
          showmenu:true,
          current:"https://api.java.crmeb.net/crmebimage/public/content/2022/08/04/0f78716213f64bfa83f191d51a832cbf73f6axavoy.jpg",

        })
    }
})