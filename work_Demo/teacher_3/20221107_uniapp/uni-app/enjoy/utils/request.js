let baseUrl="https://apif.java.crmeb.net/api/front";
let request=(url,method,data=null,header={})=>{
    return new Promise((reslove,reject)=>{
        uni.request({
            url: baseUrl+url,
            method: method,
            data: data,       
            header:header,
            success: res => {
                reslove(res)
            },
            fail: err=> {
                reject(err)
            },
            complete: () => {}
        });
    })
}

// 请求拦截
uni.addInterceptor("request",{
    invoke(args){
        // console.log(args);
        let token=localStorage.getItem("authori-zation");
        if(token){
             args.header["authori-zation"] = token;
        }
        
    },
    complete() {
        // console.log("请求头设置成功");
    },
    success(res) {
        // console.log(res);
       
    }
    
})


export default request;