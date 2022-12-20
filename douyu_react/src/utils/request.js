import axios from 'axios';
axios.defaults.baseURL = "/douyu/api/RoomApi";
let request = (url, data = null, method = "get") => {
    return new Promise((resolve, reject) => {
        axios({
            url: url,
            params: method === "get" ? data : null,
            data: method !== "get" ? data : null,
            method: method,
        }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}


export {
    request
}