// 封装一个函数 函数的参数为一个函数(回调函数) 当系统中存在plus环境时调用回调函数执行回调函数中的代码
let plusExtend = (callback)=>{
    if(window.plus){
        // 直接执行 plus api
        callback();
    }else{
        document.addEventListener("plusready",()=>{
            callback();
        })
    }
}

export default plusExtend;