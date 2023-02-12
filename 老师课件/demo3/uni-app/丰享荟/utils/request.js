let api = "https://apif.java.crmeb.net";
let request = (url,method,data=null,header={})=>{
	return new Promise((reslove,reject)=>{
		uni.request({
			url:api+url,
			method:method,
			header:header,
			data:data,
			success(res){
				reslove(res)
			}
		})
	})
}
uni.addInterceptor("request",{
	invoke(args) {
	    console.log(args)
		// 设置请求同授权token
		let token = uni.getStorageSync("token");
		args.header["authori-zation"]=token;
	  }
})

export default request;