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

module.exports = {
  sort,
  unique,
};
