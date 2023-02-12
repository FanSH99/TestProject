<template>
    <div>
      <div class="btns">
        <van-button type="info" @click="paizhao">拍照</van-button>
      </div>
      <div class="btns">
        <van-button type="info" @click="showImg">图片预览</van-button>
      </div>
      <div class="btns">
        <van-button type="info" @click="qqShare">qq分享</van-button>
      </div>
      <div class="btns">
        <van-button type="info" @click="wxLogin">微信登录</van-button>
      </div>
    </div>
  </template>
  <script>
  export default {
    data(){
      return {
        shareServe:{
          qq:"",
				weixin:"",
				sinaweibo:""
        },
        loginServe:{
				univerify:"",
				weixin:"",
				google:"",
				qq:"",
				sinaweibo:"",
				facebook:""
			}
      }
    },
    created(){
      this.$plus(()=>{
        let that = this;
        	// 获取分享服务
				plus.share.getServices(function(s){
						s.forEach(item=>{
							console.log(item.id)
							that.shareServe[item.id] = item
						})
					}, function(e){
						alert("获取分享服务列表失败： "+JSON.stringify(e));
					});
           // 获取登录权限服务商
				  plus.oauth.getServices( (serve)=>{
					  serve.forEach(item=>{
						  that.loginServe[item.id] = item
					  })
				  },(err)=>{
						alert("获取失败")
				  });
      })
    },
    methods:{
      paizhao(){
        this.$plus(()=>{
          		// 获取摄像头对象
				let car = plus.camera.getCamera();
				car.captureImage((path) => {
					alert("拍照成功！！！！", path)
				}, (err) => {
					alert("拍照失败", err)
				})
        })
      },
      showImg(){
       this.$plus(()=>{
        plus.nativeUI.previewImage([
					"https://api.java.crmeb.net/crmebimage/public/content/2022/09/28/24cf2492772c44e8b48a3c2d006b16e6z83iz1p60x.jpg",
					"https://api.java.crmeb.net/crmebimage/public/content/2022/08/04/0f78716213f64bfa83f191d51a832cbf73f6axavoy.jpg"
				]);
       })
      },
      qqShare(){
        this.$plus(()=>{
          let msg = {
					type:"web",
				    title:"分享给你个好东西",
					content:"想啥呢，逗你呢",
					thumbs:"https://api.java.crmeb.net/crmebimage/public/content/2022/09/30/7d26592b331244229f449eff63240f12yj7ud7wbnr.jpg",
					href:"http://106.12.150.223:3000/app/index.html#/home",
					extra:""
				}
				this.shareServe["qq"].send(msg,()=>{
					alert("分享成功")
				},()=>{
					alert("分享失败")
				})
        })
      },
      wxLogin(){
        this.loginServe["weixin"].login((res)=>{
						console.log(JSON.stringify(res));
						alert("登录成功")
				},()=>{
					alert("登录失败")
				})
      }
    }
  }
  </script>
  <style>
  .btns{
    width: 80%;
    margin: 20px auto;
  }
  </style>