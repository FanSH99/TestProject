import { postRequest } from "@/utils/requset";
import axios from 'axios';
axios.defaults.baseURL = '/elelogin'
// 获取验证码
let getCode = ()=>postRequest(`/v1/captchas`);

// 用户登录
let userLogin = (data)=>{
    return new Promise((reslove,reject)=>{
            axios.post(`/v2/login`,data).then(res=>{
                reslove(res)
            })
    })
}
export {
    getCode,
    userLogin
}