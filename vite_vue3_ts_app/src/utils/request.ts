import axios from "axios";

import store from '../store'
import router from "../router";

axios.defaults.baseURL = "http://106.12.150.223:8090/api/private/v1/"

let request = (url: string, method: RequestMthod, params: Params = {}): Promise<any> => {
    return new Promise((resolve, reject) => {
        axios({
            url: url,
            method: method,
            data: method !== "GET" ? params : null,
            params: method === "GET" ? params : null
        }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}
// 请求拦截，给请求头添加授权字段token，--config携带请求头。
axios.interceptors.request.use((config: Params) => {
    // 设置授权字段
    config.headers["Authorization "] = store.state.token;
    // 必须return 否则不继续下一步
    return config;
})


// 响应拦截处理无效token
axios.interceptors.response.use((res) => {
    // console.log(res,"----------------")
    if (res.data.meta.msg === "无效token") {
        // 表示token过期
        store.commit("setToken", null);
        localStorage.removeItem("LOGIN_STATE_TOKEN");
        router.push({
            path: "/login"
        })
        return res
    }

    return res

})
export default request;