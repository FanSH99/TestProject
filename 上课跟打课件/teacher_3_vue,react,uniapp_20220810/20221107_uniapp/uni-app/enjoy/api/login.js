import request from '../utils/request.js'

let header = {
	"content-type":"application/x-www-form-urlencoded"
}
// 发送验证码
let sendCode=(data)=>request('/sendCode',"post",data,header);

// 用户登录
let userLogin = (data)=>request(`/login/mobile`,"post",data)
export{
    sendCode,
    userLogin
}