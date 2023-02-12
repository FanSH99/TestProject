import axios from 'axios';
// 设置默认 baseurl
axios.defaults.baseURL = 'https://elm.cangdu.org';

// 封装get请求
let requestGet = (url,data)=>{
     return new Promise((reslove,reject)=>{
        // axios get请求传参的另一种方式
        axios.get(url,{params:data}).then(res=>{
            reslove(res)
        }).catch(err=>{
            reject(err)
        })
     })
}

let postRequest = (url,data=null)=>{
    return new Promise((reslove,reject)=>{
        axios.post(url,data).then(res=>{
            reslove(res)
        }).catch((err)=>{
            reject(err)
        })
    })
}
export {
    requestGet,
    postRequest
}