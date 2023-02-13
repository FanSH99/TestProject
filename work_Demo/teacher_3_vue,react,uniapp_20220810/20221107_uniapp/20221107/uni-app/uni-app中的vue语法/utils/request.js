
let request=(url,method)=>{
    return new Promise((reslove,reject)=>{
        uni.request({
            url:url,
            method:method,
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
        args.header.token="11234566577634"
    },
    complete() {
        console.log("请求头设置成功");
    },
    success(res) {
        console.log(res);
        res.code =1;
    }
    
})

export default request;