let request = (url,metod)=>{
	return new Promise((reslove,reject)=>{
		 uni.request({
		 	url:url,
			method:metod,
			success(res){
					reslove(res)
			},
			header:{
				
			}
		 })
	})
}
// 请求拦截
uni.addInterceptor("request",{
	invoke(args){
		console.log(args)
		args.header.lzq = '123456'
	},
	success(res){
		console.log(res)
		res.code =1;
	}
})
export default request;