// 包的入口函数

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

// 数组的排序
function sort(arr) {
  for (var j = 0; j < arr.length - 1; j++) {
    for (var i = 0; i < arr.length - j - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }

  return arr;
}

// 数组的去重
function unique(arr) {
  let set = new Set(arr);
  arr = [...set]; // 解构

  return arr;
}

// 向外暴露需要的成员
module.exports = {
  // 属性名和值一样时的省略写法
  dateFormat,
  sort,
  unique,
};
