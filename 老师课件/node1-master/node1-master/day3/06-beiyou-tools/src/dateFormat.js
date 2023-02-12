// 定义格式化时间函数
function dateFormat(dateStr) {
    let dt = new Date(dateStr);
  
    let y = dt.getFullYear();
    let m = dt.getMonth() + 1;
    let d = dt.getDate();
  
    let hh = dt.getHours();
    let mm = dt.getMinutes();
    let ss = dt.getSeconds();
  
    hh = hh < 10 ? "0" + hh : hh;
    mm = mm < 10 ? "0" + mm : mm;
    ss = ss < 10 ? "0" + ss : ss;
  
    let result = `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
    return result;
  }
  
  module.exports = {
    dateFormat,
  };
  