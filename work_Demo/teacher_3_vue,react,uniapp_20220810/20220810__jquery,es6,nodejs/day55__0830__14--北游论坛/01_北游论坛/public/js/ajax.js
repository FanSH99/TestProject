let request = (url, method, data) => {
    return new Promise((reslove, reject) => {
        $.ajax({
            url: url,
            method: method,
            data: data,
            success(res) {
                reslove(res)
            },
            error(err) {
                reject(err)
            }
        })
    })
}
// 获取当前事件
function getTime(){
    let time = new Date();
    let year = time.getFullYear();
    let month = time.getMonth()+1;
    let day = time.getDate();
    let h = time.getHours();
    h = h<10?"0"+h:h
    let m = time.getMinutes();
    m = m<10?"0"+m:m
    let s = time.getSeconds();
    s = s<10?"0"+s:s
    return `${year}年${month}月${day}日 ${h}:${m}:${s}`
}