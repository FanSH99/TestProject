// 1. 定义格式化时间的方法
function dateFormat(dtStr) {
  let dt = new Date(dtStr);

  let y = dt.getFullYear();
  y = y < 0 ? "0" + y : y;
  let m = dt.getMonth() + 1;
  m = m < 0 ? "0" + m : m;
  let d = dt.getDate();
  d = d < 0 ? "0" + d : d;

  let hh = dt.getHours();
  let mm = dt.getMinutes();
  let ss = dt.getSeconds();

  result = `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
  return result;
}

// 2. 对外暴露属性
module.exports = {
  // dateFormat: dateFormat,
  // 属性名和值一样时，可以简写
  dateFormat,
};
