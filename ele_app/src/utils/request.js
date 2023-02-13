import { getShopList } from '@/api/shop';
import axios from 'axios';

// 设置默认请求头。
axios.defaults.baseURL = 'https://elm.cangdu.org';

// 封装get请求
// let requestGet = (url) => {
//     return new Promise((resolve, reject) => {
//         axios.get(url).then(res => {
//             resolve(res)
//         }).catch(err => {
//             reject(err)
//         })
//     })
// }
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
export {
    requestGet
}