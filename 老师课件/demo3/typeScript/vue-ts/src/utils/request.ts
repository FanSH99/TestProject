import axios from 'axios';
axios.defaults.baseURL = 'https://game.gtimg.cn';
let request:AxiosRequest.RequestFun = (url,method,params)=>{
    return new Promise((reslove:Function,reject:Function)=>{
        if(method === "GET"){
            axios.get(url,{params:params}).then((res)=>{
                reslove(res)
            })
        }else{
            axios.post(url,params).then((res)=>{
                reslove(res)
            }) 
        }
    })
}
export default request;