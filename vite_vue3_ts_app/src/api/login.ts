// 用来存放登录页面的api信息、

import request from "../utils/request";

let userLogin = (data: LoginParams): Promise<any> => request('login', "POST", data);

export {
    userLogin,
}