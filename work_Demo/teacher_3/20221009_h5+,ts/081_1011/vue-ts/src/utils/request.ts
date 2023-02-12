import axios from 'axios';
// axios.defaults.baseURL = 'https://game.gtimg.cn/';

// 封装axios请求
let request: AxiosRequest.RequestFun = (url, method, params = {}) => {
    return new Promise((resolve: Function, reject: Function) => {
        if (method === 'GET') {
            axios.get(url, { params: params }).then((res) => {
                resolve(res)
            })
        } else {
            axios.post(url, params).then((res) => {
                resolve(res)
            })
        }
    })
}
export default request