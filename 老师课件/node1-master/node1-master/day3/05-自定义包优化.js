/* 
    将不同的功能进行模块的拆分
        1. 将日期格式化，拆分到 src/dateFormat.js 中
        2. 将数组排序/去重，拆分到 src/array.js 中
        3. 在 index.js 中导入两个模块，得到需要向外共享的方法
        4. 在 index.js 中，使用 module.exports 把对应的方法共享出去。
        5. 在 04-使用自定义的包.js 文件中，导入并测试
*/