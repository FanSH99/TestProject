import axios from "axios";
import router from "../router";
import store from '../store'
axios.defaults.baseURL = 'http://106.12.150.223:8090/api/private/v1/'
// 请求拦截 每次发送请求都需要给请求头添加授权字段token
axios.interceptors.request.use((config:Params)=>{
    // 设置请求头授权字段
    config.headers["Authorization"] = store.state.token;
    return config
})
// 响应拦截处理无效token
axios.interceptors.response.use((res)=>{
    // console.log(res,"----------------")
    if(res.data.meta.msg==="无效token"){
        // 表示token过期
        store.commit("setToken",null);
        localStorage.removeItem("LOGIN_STATUS_TOKEN");
        router.push({
            path:"/login"
        })
        return res
    }

    return res

})
let request = (url:string,method:RequestMethod,params:Params = {}):Promise<any>=>{
    return new Promise((reslove:Function,reject:Function)=>{
        // axios get请求参数 可以直接拼接到路径 若不想手动将请求参数拼接到路径上可以将参数以对象的形式 传递到axios 但是对象属性名必须为params 
        // axios.get("/getuser",{params:{name:"张三"}})
            axios({
                url:url,
                method:method,
                params:method === 'GET'? params :null,
                data:method !== "GET" ? params :null,
            }).then(res=>{
                reslove(res)
            })
            
    })
}

export default request;