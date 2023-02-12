import { Toast } from "vant"

let showLoading = ()=>{
    Toast({
        type:"loading",
        message:"加载中...",
        duration:0,
        forbidClick:true
    })
}

let hideLoading = ()=>{
    Toast.clear();
}

export {
    showLoading,
    hideLoading
}