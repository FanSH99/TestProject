/* // 封装一个函数，函数的参数是一个回调函数。
当系统中存在plus环境，调用回调函数中的代码，
当系统中不存在plus环境，监听
*/

let plusExtend = (callback) => {
    if (window.plus) {
        // 执行plus api
        callback();
    } else {
        document.addEventListener('plusready', () => {
            callback();
        })
    }
}

export default plusExtend;

/* // import plusExtend from '@/utils/plusExtend'
plusExtend(()=>{
      plus.navigator.setStatusBarBackground('#319018')
    // 状态栏样式只有dark和light两种，dark--当前状态栏文字为黑色 light--状态栏文字为白色
    plus.navigator.setStatusBarStyle("light")
}) */