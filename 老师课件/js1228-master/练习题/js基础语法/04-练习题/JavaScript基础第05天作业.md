# 每日作业-JavaScript第05天

###1 - 基础练习

1. 创建一个电脑对象

    ​			有颜色(color)、重量(weight)、品牌(brand)、型号(type)等属性,

    ​			有看电影(watch)、听音乐(listen)、打游戏(play)和敲代码(coding)等方法。

    题目描述：

    ​			颜色、重量、品牌、型号是属性；看电影、听音乐、打游戏、敲代码是方法,在调用方法时分别打印 “我在看电影/听音乐/打游戏/敲代码”

2. 遍历下面对象

   ```JavaScript
   var yuji = {
   	name:"虞姬",
   	level:18,
   	age:"5岁",
   	skill:"大风来"
   };
   ```

   

3. 请描述下面代码的输出结果以及运行原因

   ```js
   var num = 1;
   function demo(){
       console.log(num);
       function demoSon(){
           console.log(num);
           num = 3;
           console.log(num);
       }
       var num = 2
       demoSon();
   }
   demo();
   ```

4. 请使用arguments完成函数getResult,实现得到输入的所有的数值中的最小值、最大值、平均数、总和等功能

  ​	作业描述：
​			函数名：getResult
   ​			函数调用方式：getResult(数值1,数值2,数值3,数值4.....)
   ​			函数功能：返回值是一个对象,这个对象有sum, max, min, averages等属性,分别表示实参的总和、最大值、最小值、平均数等
   
   ```
   
   ```

   

### 2 - 进阶练习

1. 书写一个函数,判断指定数据是否存在于指定数组中

   ```JavaScript
   要求：
   	函数名称：exist
   	函数调用方式：exist(数据data,数组arr)
   	函数功能：判断“数据data”是否存在于“数组arr”中,如果是函数返回值为true,如果不是函数返回值为false
   ```

   

2. 以下有两个数组,一个数组arr是班级里所有的学员的名称,一个数组currentArr是提交了每日反馈的学员名单,请创建一种算法,把未提交每日反馈的学员筛选出来

```javascript
var arr = ["张飞", "关羽", "刘备", "曹操", "黄忠", "诸葛亮", "张辽", "赵云", "姜维"];

var currentArr = ["关羽", "刘备", "曹操", "张辽", "赵云", "姜维"];
```

