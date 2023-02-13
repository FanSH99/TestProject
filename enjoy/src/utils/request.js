import axios from 'axios';
import Qs from 'qs';

// 设置默认请求头。
axios.defaults.baseURL = 'https://apif.java.crmeb.net';

let requestGet = (url, data) => {
    return new Promise((resolve, reject) => {
        axios({
            url: url,
            params: data,
            method: "get",
        }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}
let requestPost = (url, data) => {
    return new Promise((resolve, reject) => {
        axios({
            url: url,
            data: data,
            method: "post",
        }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

let request3xW = (url, data) => {
    return new Promise((resolve, reject) => {
        axios({
            url: url,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: Qs.stringify(data),
            method: "post",

        }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

// request拦截器
axios.interceptors.request.use(
    (config) => {
        // 打开loading
        const token = localStorage.getItem('token');
        if (token) {
            // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers["authori-zation"] = token; //请求头加上token
        }
        return config;
    },

);

export {
    requestGet,
    requestPost,
    request3xW,
}