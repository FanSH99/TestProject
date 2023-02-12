## 安装
```
npm install beiyou-tools
```

## 导入
```js
const tools = require("beiyou-tools");
```

## 格式化时间
```
const result = tools.dateFormat(new Date());
console.log(result); // 2022-1-01 14:30:43
```

## 数组的排序
```
let arr = [9, 5, 2, 6, 2, 5, 1];
const result = tools.sort(arr);
console.log(result);  // [1, 2, 2, 5, 5, 6, 9]
```

## 数组的去重
```
let arr = [9, 5, 2, 6, 2, 5, 1];
const result = tools.unique(arr);
console.log(result);  // [ 1, 2, 5, 6, 9 ]
```

## 开源协议
ISC