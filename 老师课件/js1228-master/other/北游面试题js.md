# 北游国际面试题总结

>javascript

# 三、Javascript部分

## 3.1 js数据类型有哪些

Number 、String、Boolean、Null、Undefined、Object、Symbol、BigInt

## 3.2 怎么判断对象还是数组？

   **最少3种以上**

- **instanceof**
- **对象的constructor属性**
- **Object.prototype.toString.call(arr)**
- **Array.isArray()** 

## 3.3 new关键字做了什么

- 创建一个简单空对象
- 原型的执行,确定对象o的原型链
- 绑定this对象为o,传入参数；执行Person构造函数,进行属性和方法的赋值操作
- 返回结果

## 3.4  Javascript事件流

DOM事件流是有两种的,一种是捕获型事件流,另外一种是冒泡型事件流,两者其实都很好理解,下面我们就来详细介绍一下,为了大家更好的理解,我们就先介绍下冒泡型事件流

1. 冒泡型事件流 **"冒泡"**：没错就是你心中想的,冒泡就是我们平时可以常见的,例如水中的气泡往上冒,这就是冒泡,所以冒泡型事件流,就是当你点击目标元素的时候,当前所触发的一些事件会向父元素中传递,这就是所谓的事件冒泡,如果大家还是有不理解的地方,可以直接看后面的代码
2. 捕获型事件流 捕获型事件流正好是与冒泡型事件流相反的,当你点击目标元素的时候,在该目标元素上点击触发的事件,会从父元素向下传递
3. 其实,DOM标准规定事件流包括三个阶段：事件捕获阶段、处于目标阶段和事件冒泡阶段。 事件捕获阶段：实际目标在捕获阶段不会接收事件。也就是在捕获阶段,事件从document到再到就停止了。 处于目标阶段：事件在上发生并处理。但是事件处理会被看成是冒泡阶段的一部分。 冒泡阶段：事件又传播回文档。

## 3.5 怎么阻止冒泡事件

w3c:  event.stopPropagation()

IE:     window.event.cancelBubble = true

## 3.6 怎么阻止默认事件

event.preventDefault()

## 3.7 什么是事件委托

用事件冒泡的原理,自己所触发的事件, 让他的父元素代替执行。

## 3.8 什么是抖动 节流

参考:

https://blog.csdn.net/Welkin_qing/article/details/88126044

- 函数防抖

  **规定函数至少间隔多久执行**

- 函数节流

  **规定函数在某时间段内最多执行一次**

函数防抖和函数节流的对比
不管是函数节流还是函数防抖,减少的都是事件处理程序的调用频率,而不是时间的调用频率

何时使用函数防抖,何时使用函数节流？
当我们只需要处理最后一次触发事件时,用函数防抖。（例如：窗口大小变化,并不需要计算中间变化的过程,只需要窗口大小改变完成后的值）
当事件触发过于频繁,我们需要限制事件处理程序的调用频率时,用函数节流

## 3.9 什么是深浅拷贝怎么实现

浅拷贝只是拷贝一层, 更深层次对象级别的只拷贝引用. 不拷贝地址,两者属性值指向同一内存空间。简单来讲,就是改变其中一个对象,另一个对象也会跟着改变。

拷贝对象各个层级的属性。简单的讲,就是复制出来的每个对象都有属于自己的内存空间,不会互相干扰。



实现: 最少2种 -- 深度拷贝

```javascript
// 深拷贝：对对象内部进行深拷贝,支持 Array、Date、RegExp、DOM
const deepCopy = (sourceObj) => {
  // 如果不是对象则退出（可停止递归）
  if(typeof sourceObj !== 'object') return;
  
  // 深拷贝初始值：对象/数组
  let newObj = (sourceObj instanceof Array) ? [] : {};

  // 使用 for-in 循环对象属性（包括原型链上的属性）
  for (let key in sourceObj) { 
    // 只访问对象自身属性
    if (sourceObj.hasOwnProperty(key)) {
      // 当前属性还未存在于新对象中时
      if(!(key in newObj)){
        if (sourceObj[key] instanceof Date) {
          // 判断日期类型
          newObj[key] = new Date(sourceObj[key].getTime());
        } else if (sourceObj[key] instanceof RegExp) {
          // 判断正则类型
          newObj[key] = new RegExp(sourceObj[key]);
        } else if ((typeof sourceObj[key] === 'object') && sourceObj[key].nodeType === 1 ) {
          // 判断 DOM 元素节点
          let domEle = document.getElementsByTagName(sourceObj[key].nodeName)[0];
          newObj[key] = domEle.cloneNode(true);
        } else {
          // 当元素属于对象（排除 Date、RegExp、DOM）类型时递归拷贝
          newObj[key] = (typeof sourceObj[key] === 'object') ? deepCopy(sourceObj[key]) : sourceObj[key];
        }
      }
    }
  }
  
  
  return newObj;
}

// deepCopy 函数测试效果
const objA = {
  name: 'jack',
  birthday: new Date(),
  pattern: /jack/g,
  body: document.body,
  others: [123,'coding', new Date(), /abc/gim,]
};

const objB = deepCopy(objA);
console.log(objA === objB); // false
console.log(objA.others === objB.others); // false
console.log(objA, objB); // 对象内容一样
```



## 3.20 call、bind和apply的区别

1.  都可以更改this指向

2. call,bind后面的第一个参数是指向的对象,第二个参数是往对象传的值

3. apply后面的第一个参数是指向的对象,第二个参数是数组,数组里面是往对象传的值（arguments  全部参数）

4. call和apply更改this指向会自动调用,bind需要手动调用

## 3.21 cookie,sessionStorage和localStorage的区别是什么

1. 都可以用来存储数据

2. cookie一条数据大小不能超过4KB ,最多不能存储超过20条,如果没有设置过期时间,那么在浏览器关闭后消失

3. sessionStorage是会话存储,一条大小不能超过5M,数量没有限制,关掉页面数据消失

4. localStorage本地存储,一条大小不超过5M,数量没有限制,除非主动删除,否则数据不会消失

## 3.22  什么是原型链

当访问一个对象的某个属性时,会先在这个对象本身属性上查找,如果没有找到,则会去它的__proto__隐式原型上查找,即它的构造函数的prototype,如果还没有找到就会再在构造函数的prototype的__proto__中查找,这样一层一层向上查找就会形成一个链式结构,我们称为原型链
![img](https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg-blog.csdnimg.cn%2F20200324172235599.png%3Fx-oss-process%3Dimage%2Fwatermark%2Ctype_ZmFuZ3poZW5naGVpdGk%2Cshadow_10%2Ctext_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjMzODU4NA%3D%3D%2Csize_16%2Ccolor_FFFFFF%2Ct_70&refer=http%3A%2F%2Fimg-blog.csdnimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634980485&t=0701089532bb49fd02da93167363a8db)

## 3.23 什么是闭包？闭包的作用场景是什么？

闭包指的是一个函数可以访问另一个函数作用域中变量

各种专业文献上的"闭包"（closure）定义非常抽象,很难看懂。我的理解是,**闭包就是能够读取其他函数内部变量的函数**。

由于在Javascript语言中,只有函数内部的子函数才能读取局部变量,因此可以把**闭包简单理解成"定义在一个函数内部的函数"**。

所以,在本质上,**闭包就是将函数内部和函数外部连接起来的一座桥梁。**

- 采用函数引用方式的setTimeout调用

- 小范围代替全局变量

- 访问私有变量的特权方法

- 模块化

  使用作用域链的形式说明闭包是什么？

  当外层函数执行时,内层函数进行定义,此时内层函数生成作用域链,作用域链中包含外层函数的AO对象,导致AO无法释放,这就形成了闭包。
  
  

**闭包缺点：**会导致函数的变量一直保存在内存中,过多的闭包可能会导致内存泄漏

## 3.24 同步异步的区别是什么

***\*同步：上一个任务没有执行完,下一个任务不能开启\****

***\*异步：即便上一个任务没有执行完,下一个任务仍然可以开启\****

## 3.25 Javascript中异步操作 及其js中EventLoop 事件循环

**(1)** ***\*setTimeout 延时器\****

**(2)** ***\*setInterval 计时器\****

**(3)** ***\*数据请求\****

EventLoop ： 暂定

## 3.26 es6有哪些新特性

​	1.let关键字,声明变量

​	2.const关键字,声明常量

​	3.模板字符串

​	4.箭头函数

​	5.对象和数组解构

​	6.Map、Set集合

​	7.Promise对象

​	8.引入class关键字

​    9.ES6模块化

## 3.27 var 和let、Const的区别是什么

(1) let声明的变量只能先声明后赋值

(2) 只能使用let对同一个变量声明一次

(3) let声明的变量有块级作用域

## 3.28 数组的常用方法有哪些？

pop、push、cancat、shift、unshift、join、filter、map、some、everything、reduce、find、splice

## 3.29 字符串常用的方法有哪些？

substr、slice、concat、

## 3.30 数组怎么进行去重 （3种以上方法）

- 利用ES6 Set去重（ES6中最常用）
- 利用for嵌套for,然后splice去重（ES5中最常用）
- 利用indexOf去重
- 利用includes
- 利用filter

## 3.31 数组扁平化

- #### ES5+递归

- #### ES6+reduce+递归

- ### ES6 Flat函数

## 3.32 什么是纯函数

    纯函数的概念：一个函数的返回结果只依赖其参数,并且执行过程中没有副作用。

## 3.33 什么是高阶函数
   一个函数作为另外一个函数的参数或者一个函数的返回值为另外一个函数这种函数就称之为高阶函数。

## 3.34 函数柯里化及其用途
柯里化,英语：Currying,是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数,并且返回接受余下的参数而且返回结果的新函数的技术。
应用:
  参考地址: https://blog.csdn.net/qq_18404993/article/details/108836643
 -参数复用

 - 兼容性检测：提前确认/提前返回
 - 延迟执行 
	

## 3.35 怎么解决异步回调地狱问题?

Promise、generator、async await

## 3.36 说一下Promise的使用？

Promise是异步编程的一种解决方案,在ES6中Promise被列为了正式规范,统一了用法,原生提供了Promise对象。**Promise承诺：默认情况下是等待状态pending,如果有一天状态转变为成功就成功了,如果状态变成失败就失败了。状态一旦改变了就不能再改变了。**

三种状态： pending,Resolved, Rejected

- then 方法
- catch的用法
- finally方法
- all的用法
- race的用法
- Promise的静态方法

## 3.37 怎么将伪数组转换成真正的数组？

- ```javascript
  Array.prototype.slice.call(arguments,0) // 使用slice方法实现
  ```

- ```javascript
  Array.from(arguments) // 使用ES6中的函数
  ```

- ```javascript
  [...arguments]
  ```

## 3.38 斐波那契数列怎么实现？

- 第一种实现：普通递归

  ```javascript
  function fibonacci(n) {
      if (n == 1 || n == 2) {
          return 1
      };
      return fibonacci(n - 2) + fibonacci(n - 1);
  }
  fibonacci(30)
  ```

- 第二种实现: 改进递归-把前两位数字做成参数避免重复计算

  ```javascript
  function fibonacci(n) {
      function fib(n, v1, v2) {
          if (n == 1)
              return v1;
          if (n == 2)
              return v2;
          else
              return fib(n - 1, v2, v1 + v2)
      }
      return fib(n, 1, 1)
  }
  fibonacci(30)
  ```

- 第三种实现：改进递归-利用闭包特性把运算结果存储在数组里,避免重复计算

  ```javascript
  var fibonacci = function () {
      let memo = [0, 1];
      let fib = function (n) {
          if (memo[n] == undefined) {
              memo[n] = fib(n - 2) + fib(n - 1)
          }
          return memo[n]
      }
      return fib;
  }()
  fibonacci(30)
  ```

- 第四种实现: 改进递归-摘出存储计算结果的功能函数

  ```javascript
  var memoizer = function (func) {
      let memo = [];
      return function (n) {
          if (memo[n] == undefined) {
              memo[n] = func(n)
          }
          return memo[n]
      }
  };
  var fibonacci=memoizer(function(n){
      if (n == 1 || n == 2) {
          return 1
      };
      return fibonacci(n - 2) + fibonacci(n - 1);
  })
  fibonacci(30)
  ```

- 第五种: 普通for循环

  ```javascript
  function fibonacci(n) {
      var n1 = 1, n2 = 1, sum;
      for (let i = 2; i < n; i++) {
          sum = n1 + n2
          n1 = n2
          n2 = sum
      }
      return sum
  }
  fibonacci(30)
  ```

- 第六种：for循环+解构赋值

  ```javascript
  var fibonacci = function (n) {
      let n1 = 1; n2 = 1;
      for (let i = 2; i < n; i++) {
          [n1, n2] = [n2, n1 + n2]
      }
      return n2
  }
  fibonacci(30)
  ```

  这六种方法需要会 第六种 和 第三种。其他需要了解

## 3.39 冒泡算法

```javascript
//从小到大
function BubbleSort(arr){
    var i,j,temp;
    for(i=0;i<arr.length-1;i++){
        for(j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                temp=arr[j];
                arr[j]=arr[i];
                arr[i]=temp;
            }
        }
    }
    return arr;
}
var arr=[10,7,9,11,22,33,4,2,0,1000];
BubbleSort(arr);  17 console.log(arr); //[0, 2, 4, 7, 9, 10, 11, 22, 33, 1000]
```

## 3.40 快排算法

参考地址： https://www.cnblogs.com/hjx-blog/articles/9183453.html

```javascript
var quickSort_New = function(ary, left, right) {
        if(left >= right) {
            return ary;
        }

        var i = left,
             j = right;
             base = ary[left];

        while (i < j) {
            // 从右边起,寻找比基数小的数
            while (i<j && ary[j] >= base) {
                j--;
            }

            // 从左边起,寻找比基数大的数
            while (i<j && ary[i] <= base) {
                i++
            } 

            if (i<j) {
                var temp = ary[i];
                ary[i] = ary[j];
                ary[j] = temp;
            }
        }

        ary[left] = ary[i];
        ary[i] = base;

        quickSort_New(ary, left, i-1);
        quickSort_New(ary, i+1, right);

        return ary;
    }
```

## 3.41 面向对象继承方式（ES5）

- 原型链的方式来实现继承

- 借用构造函数

- 组合继承

- 寄生式继承

- 寄生式组合继承

## 3.42 EventLoop事件循环

```
JS`是单线程的,为了防止一个函数执行时间过长阻塞后面的代码,所以会先将同步代码压入执行栈中,依次执行,将异步代码推入异步队列,异步队列又分为宏任务队列和微任务队列,因为宏任务队列的执行时间较长,所以微任务队列要优先于宏任务队列。微任务队列的代表就是,`Promise.then`,`MutationObserver`,宏任务的话就是`setImmediate setTimeout setInterval
```

## 3.43 介绍一下垃圾回收机制

垃圾回收机制大体上分为两种检测手段,引用计数与标记清除。

从2012年起,所有现代浏览器都使用了标记清除垃圾回收算法,但老版本的IE6除外。

如何避免内存泄漏：

**1.尽量减少全局变量**

**2.移除被遗忘的定时器或回调函数**

**3.及时释放闭包中的变量**

**4.DOM的引用时 不再使用DOM及时清除**

## 3.43 Proxy的作用?有哪些方法？

Proxy 用于修改某些操作的默认行为,等同于在语言层面做出修改,所以属于一种“元编程”（meta programming）,即对编程语言进行编程。Proxy 可以理解成,在目标对象之前架设一层“拦截”,外界对该对象的访问,都必须先通过这层拦截,因此提供了一种机制,可以对外界的访问进行过滤和改写。Proxy 这个词的原意是代理,用在这里表示由它来“代理”某些操作,可以译为“代理器”。

方法只需记住关键的几个即可：

- **get(target, propKey, receiver)**：拦截对象属性的读取,比如`proxy.foo`和`proxy['foo']`。 // 记住
- **set(target, propKey, value, receiver)**：拦截对象属性的设置,比如`proxy.foo = v`或`proxy['foo'] = v`,返回一个布尔值。// 记住
- **has(target, propKey)**：拦截`propKey in proxy`的操作,返回一个布尔值。
- **deleteProperty(target, propKey)**：拦截`delete proxy[propKey]`的操作,返回一个布尔值。 // 记住
- **ownKeys(target)**：拦截`Object.getOwnPropertyNames(proxy)`、`Object.getOwnPropertySymbols(proxy)`、`Object.keys(proxy)`、`for...in`循环,返回一个数组。该方法返回目标对象所有自身的属性的属性名,而`Object.keys()`的返回结果仅包括目标对象自身的可遍历属性。
- **getOwnPropertyDescriptor(target, propKey)**：拦截`Object.getOwnPropertyDescriptor(proxy, propKey)`,返回属性的描述对象。  // 记住
- **defineProperty(target, propKey, propDesc)**：拦截`Object.defineProperty(proxy, propKey, propDesc）`、`Object.defineProperties(proxy, propDescs)`,返回一个布尔值。 // 记住
- **preventExtensions(target)**：拦截`Object.preventExtensions(proxy)`,返回一个布尔值。
- **getPrototypeOf(target)**：拦截`Object.getPrototypeOf(proxy)`,返回一个对象。
- **isExtensible(target)**：拦截`Object.isExtensible(proxy)`,返回一个布尔值。
- **setPrototypeOf(target, proto)**：拦截`Object.setPrototypeOf(proxy, proto)`,返回一个布尔值。如果目标对象是函数,那么还有两种额外操作可以拦截。
- **apply(target, object, args)**：拦截 Proxy 实例作为函数调用的操作,比如`proxy(...args)`、`proxy.call(object, ...args)`、`proxy.apply(...)`。 // 记住
- **construct(target, args)**：拦截 Proxy 实例作为构造函数调用的操作,比如`new proxy(...args)`。

## 3.44 前端优化之渲染百万条数据不卡顿

参考网址: https://juejin.cn/post/7011040313418448926#heading-7

Document.createDocumentFragment()： 用来创建虚拟DOM

window.requestAnimationFrame：告诉浏览器——你希望执行一个动画,并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数,该回调函数会在浏览器下一次重绘之前执行。

`requestAnimationFrame` 会把每一帧中的所有`DOM`操作集中起来,在一次重绘或回流中就完成,并且重绘或回流的时间间隔紧紧跟随浏览器的刷新频率,一般来说,这个频率为每秒60帧。

在隐藏或不可见的元素中,`requestAnimationFrame`将不会进行重绘或回流,这当然就意味着更少的的`cpu`,`gpu`和内存使用量。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <ul></ul>

    <script>
      // createDocumentFragment
      // requestAnimationFrame

      // 百万条数据
      let total = 1000000;
      // 单次插入 可自定义
      let once = 20;
      // 需要插入的次数 向上取整
      let loopCount = Math.ceil(total / once);
      // 当前渲染次数
      let countRender = 0;

      function render() {
        // 需要插入的目标对象
        const targetElement = document.querySelector("ul");
        // 文档因为存在片段于内存中,并不在DOM树中,将所以子元素插入到文档片段时不会引起页面回流（对元素位置和几何上的计算）。因此,使用文档片段通常会带来更好的性能。
        // 创建一个虚拟Dom节点 插入真实文档之前不会触发dom渲染、回流等操作
        // 因此能够很大程度减少dom操作所带来的的性能损耗
        const fragment = document.createDocumentFragment();

        // 对虚拟节点插入dom节点,也不会触发真是dom操作,同上
        for (let i = 0; i < 20; i++) {
          // 搞个节点
          const li = document.createElement("li");
          // 给li搞点内容
          li.innerHTML = Math.random();
          // 插入到虚拟节点
          fragment.appendChild(li);
        }
        // 插入到真实节点的时候,只会把虚拟fragment下的子孙节点插入
        targetElement.appendChild(fragment);
        // 渲染次数加1,控制递归的次数
        countRender++;
        // // 递归调用
        if (countRender < loopCount) {
          // window.requestAnimationFrame() 告诉浏览器——你希望执行一个动画,并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。
          // 回调函数执行次数通常是每秒60次,但在大多数遵循W3C建议的浏览器中,回调函数执行次数通常与浏览器屏幕刷新次数相匹配。
          // 能够把每次dom的操作汇总在下一次重绘之前更新动画帧
          // 因此在浏览器单线程的机制下,能够无卡顿的加载,百万级列表
          window.requestAnimationFrame(render);
        }
      }

      // 执行渲染
      render();
    </script>
  </body>
</html>
```

还有一种方案可以提高性能：

如果对于大量的数据,只应用于展示的话,可以使用**`Object.freeze()`** 方法可以**冻结**一个对象。一个被冻结的对象再也不能被修改；（这样可以让Vue不对对象增加getter和setter操作,从而提高性能）

## 3.45 手写实现Promise

```javascript
const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

const resolvePromise = (promise2, x, resolve, reject) => {
  // 自己等待自己完成是错误的实现,用一个类型错误,结束掉 promise  Promise/A+ 2.3.1
  if (promise2 === x) { 
    return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
  }
  // Promise/A+ 2.3.3.3.3 只能调用一次
  let called;
  // 后续的条件要严格判断 保证代码能和别的库一起使用
  if ((typeof x === 'object' && x != null) || typeof x === 'function') { 
    try {
      // 为了判断 resolve 过的就不用再 reject 了（比如 reject 和 resolve 同时调用的时候）  Promise/A+ 2.3.3.1
      let then = x.then;
      if (typeof then === 'function') { 
        // 不要写成 x.then,直接 then.call 就可以了 因为 x.then 会再次取值,Object.defineProperty  Promise/A+ 2.3.3.3
        then.call(x, y => { // 根据 promise 的状态决定是成功还是失败
          if (called) return;
          called = true;
          // 递归解析的过程（因为可能 promise 中还有 promise） Promise/A+ 2.3.3.3.1
          resolvePromise(promise2, y, resolve, reject); 
        }, r => {
          // 只要失败就失败 Promise/A+ 2.3.3.3.2
          if (called) return;
          called = true;
          reject(r);
        });
      } else {
        // 如果 x.then 是个普通值就直接返回 resolve 作为结果  Promise/A+ 2.3.3.4
        resolve(x);
      }
    } catch (e) {
      // Promise/A+ 2.3.3.2
      if (called) return;
      called = true;
      reject(e)
    }
  } else {
    // 如果 x 是个普通值就直接返回 resolve 作为结果  Promise/A+ 2.3.4  
    resolve(x)
  }
}

class Promise {
  constructor(executor) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks= [];

    let resolve = (value) => {
      if(this.status ===  PENDING) {
        this.status = FULFILLED;
        this.value = value;
        this.onResolvedCallbacks.forEach(fn=>fn());
      }
    } 

    let reject = (reason) => {
      if(this.status ===  PENDING) {
        this.status = REJECTED;
        this.reason = reason;
        this.onRejectedCallbacks.forEach(fn=>fn());
      }
    }

    try {
      executor(resolve,reject)
    } catch (error) {
      reject(error)
    }
  }

  then(onFulfilled, onRejected) {
    //解决 onFufilled,onRejected 没有传值的问题
    //Promise/A+ 2.2.1 / Promise/A+ 2.2.5 / Promise/A+ 2.2.7.3 / Promise/A+ 2.2.7.4
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v;
    //因为错误的值要让后面访问到,所以这里也要跑出个错误,不然会在之后 then 的 resolve 中捕获
    onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err };
    // 每次调用 then 都返回一个新的 promise  Promise/A+ 2.2.7
    let promise2 = new Promise((resolve, reject) => {
      if (this.status === FULFILLED) {
        //Promise/A+ 2.2.2
        //Promise/A+ 2.2.4 --- setTimeout
        setTimeout(() => {
          try {
            //Promise/A+ 2.2.7.1
            let x = onFulfilled(this.value);
            // x可能是一个proimise
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            //Promise/A+ 2.2.7.2
            reject(e)
          }
        }, 0);
      }

      if (this.status === REJECTED) {
        //Promise/A+ 2.2.3
        setTimeout(() => {
          try {
            let x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e)
          }
        }, 0);
      }

      if (this.status === PENDING) {
        this.onResolvedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e)
            }
          }, 0);
        });

        this.onRejectedCallbacks.push(()=> {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject)
            } catch (e) {
              reject(e)
            }
          }, 0);
        });
      }
    });
  
    return promise2;
  }
}

作者：齐小神
链接：https://juejin.cn/post/6850037281206566919
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权,非商业转载请注明出处。
```

## 3.46 手写bind函数

```javascript
//bind实现要复杂一点  因为他考虑的情况比较多 还要涉及到参数合并(类似函数柯里化)
Function.prototype.myBind = function (context, ...args) {
  if (!context || context === null) {
    context = window;
  }
  // 创造唯一的key值  作为我们构造的context内部方法名
  let fn = Symbol();
  context[fn] = this;
  let _this = this;
  //  bind情况要复杂一点
  const result = function (...innerArgs) {
    // 第一种情况 :若是将 bind 绑定之后的函数当作构造函数,通过 new 操作符使用,则不绑定传入的 this,而是将 this 指向实例化出来的对象
    // 此时由于new操作符作用  this指向result实例对象  而result又继承自传入的_this 根据原型链知识可得出以下结论
    // this.__proto__ === result.prototype   //this instanceof result =>true
    // this.__proto__.__proto__ === result.prototype.__proto__ === _this.prototype; //this instanceof _this =>true
    if (this instanceof _this === true) {
      // 此时this指向指向result的实例  这时候不需要改变this指向
      this[fn] = _this;
      this[fn](...[...args, ...innerArgs]); //这里使用es6的方法让bind支持参数合并
      delete this[fn];
    } else {
      // 如果只是作为普通函数调用  那就很简单了 直接改变this指向为传入的context
      context[fn](...[...args, ...innerArgs]);
      delete context[fn];
    }
  };
  // 如果绑定的是构造函数 那么需要继承构造函数原型属性和方法
  // 实现继承的方式: 使用Object.create
  result.prototype = Object.create(this.prototype);
  return result;
};

//用法如下

// function Person(name, age) {
//   console.log(name); //'我是参数传进来的name'
//   console.log(age); //'我是参数传进来的age'
//   console.log(this); //构造函数this指向实例对象
// }
// // 构造函数原型的方法
// Person.prototype.say = function() {
//   console.log(123);
// }
// let obj = {
//   objName: '我是obj传进来的name',
//   objAge: '我是obj传进来的age'
// }
// // 普通函数
// function normalFun(name, age) {
//   console.log(name);   //'我是参数传进来的name'
//   console.log(age);   //'我是参数传进来的age'
//   console.log(this); //普通函数this指向绑定bind的第一个参数 也就是例子中的obj
//   console.log(this.objName); //'我是obj传进来的name'
//   console.log(this.objAge); //'我是obj传进来的age'
// }

// 先测试作为构造函数调用
// let bindFun = Person.myBind(obj, '我是参数传进来的name')
// let a = new bindFun('我是参数传进来的age')
// a.say() //123

// 再测试作为普通函数调用
// let bindFun = normalFun.myBind(obj, '我是参数传进来的name')
//  bindFun('我是参数传进来的age')

```

## 3.47 RAF 和 RIC 是什么

**requestAnimationFrame：** 告诉浏览器在下次重绘之前执行传入的回调函数(通常是操纵 dom,更新动画的函数)；由于是每帧执行一次,那结果就是每秒的执行次数与浏览器屏幕刷新次数一样,通常是每秒 60 次。

**requestIdleCallback：**: 会在浏览器空闲时间执行回调,也就是允许开发人员在主事件循环中执行低优先级任务,而不影响一些延迟关键事件。如果有多个回调,会按照先进先出原则执行,但是当传入了 timeout,为了避免超时,有可能会打乱这个顺序。

> 这个题目可以深入去问浏览器每一帧的渲染流程 具体可以看看这篇 [requestIdleCallback 和 requestAnimationFrame 详解](https://juejin.cn/post/6844903848981577735)



#  四、网络请求

## 4.1 http中post请求和get请求有什么区别

（1）post更安全（不会作为url的一部分,不会被缓存、保存在服务器日志、以及浏览器浏览记录中）

（2）post发送的数据更大（get有url长度限制）

（3）post能发送更多的数据类型（get只能发送ASCII字符）

（4）post比get慢

（5）post用于修改和写入数据,get一般用于搜索排序和筛选之类的操作（淘宝,支付宝的搜索查询都是get提交）,目的是资源的获取,读取数据

## 4.2 从输入一个 URL 地址到浏览器完成渲染的整个过程？

浏览器地址栏输入 URL 并回车

浏览器查找当前 URL 是否存在缓存,并比较缓存是否过期

DNS 解析 URL 对应的 IP

根据 IP 建立 TCP 连接（三次握手）

发送 http 请求

服务器处理请求,浏览器接受 HTTP 响应

浏览器解析并渲染页面

关闭 TCP 连接（四次握手）

## 4.3 使用什么工具进行post请求的测试

postman

## 4.4 http状态码有哪些

1开头    表示临时响应并需要请求者继续执行操作的状态码。

2开头 （请求成功）表示成功处理了请求的状态代码。

3开头 （请求被重定向）表示要完成请求,需要进一步操作。 通常,这些状态代码用来重定向。

4开头 （请求错误）这些状态代码表示请求可能出错,妨碍了服务器的处理。

5开头（服务器错误）这些状态代码表示服务器在尝试处理请求时发生内部错误。 这些错误可能是服务器本身的错误,而不是请求出错。

- 常见状态码

http 状态码 200 （有内容） 服务器成功处理了请求

http 状态码 204 （无内容） 服务器成功处理了请求,但没有返回任何内容

http 状态码 301 （永久移动） 请求的网页已永久移动到新位置。 服务器返回此响应（对 GET 或 HEAD 请求的响应）时,会自动将请求者转到新位置。

http 状态码 302 （临时移动） 服务器目前从不同位置的网页响应请求,但请求者应继续使用原有位置来进行以后的请求。

http 状态码 304 （未修改） 自从上次请求后,请求的网页未修改过。 服务器返回此响应时,不会返回网页内容。

http 状态码 400 （错误请求） 服务器不理解请求的语法（一般为参数错误）。

http 状态码 401 （未授权） 请求要求身份验证。 对于需要登录的网页,服务器可能返回此响应。

http 状态码 403 （禁止） 服务器拒绝请求。（一般为客户端的用户权限不够）

http 状态码 404 （未找到） 服务器找不到请求的网页。

http 状态码 500（服务器内部错误）  服务器遇到错误,无法完成请求。

## 4.5 怎么解决跨域问题

- 后台cors
- 前端使用jsonp请求（后台接口必须支持jsonp）
- 使用反向代理方式

## 4.6  http和TCP协议都什么区别

HTTP是基于TCP的,客户端往服务端发送一个HTTP请求时第一步就是要建立与服务端的TCP连接,也就是先三次握手,“你好,你好,你好”。从HTTP 1.1开始支持持久连接,也就是一次TCP连接可以发送多次的HTTP请求。

小总结：HTTP基于TCP

需要说出TCP三次握手四次挥手。

## 4.7 http和https有什么区别

- HTTP是`明文传输`,不安全的,HTTPS是`加密传输`,安全的多

- HTTP标准端口是`80`,HTTPS标准端口是`443`

- HTTP不用认证证书`免费`,HTTPS需要认证证书`要钱`

- 连接方式不同,HTTP三次握手,HTTPS中TLS1.2版本7次,TLS1.3版本6次

- HTTP在OSI网络模型中是在`应用层`,而HTTPS的TLS是在`传输层`

- HTTP是`无状态`的,HTTPS是`有状态`的

## 4.8 http和websocket协议有什么区别

区分这两个概念是比较有意义的,毕竟TCP看不见摸不着,HTTP与Socket是实实在在能用到的。

- HTTP是短连接,Socket(基于TCP协议的)是长连接。尽管HTTP1.1开始支持持久连接,但仍无法保证始终连接。而Socket连接一旦建立TCP三次握手,除非一方主动断开,否则连接状态一直保持。
- HTTP连接服务端无法主动发消息,Socket连接双方请求的发送先后限制。这点就比较重要了,因为它将决定二者分别适合应用在什么场景下。HTTP采用“请求-响应”机制,在客户端还没发送消息给服务端前,服务端无法推送消息给客户端。必须满足客户端发送消息在前,服务端回复在后。Socket连接双方类似peer2peer的关系,一方随时可以向另一方喊话。
  - 用HTTP的情况：双方不需要时刻保持连接在线,比如客户端资源的获取、文件上传等。
  - 用Socket的情况：大部分即时通讯应用(QQ、微信)、聊天室等等。

## 4.9 Ajax请求的步骤是什么？

1.首先,创建一个XMLHttpRequest异步对象

2.然后,设置请求方式和请求地址

3.接着,用send发送请求

4.然后,监听状态变化

## 4.10 http的强制缓存和协商缓存是什么？

参考地址： https://juejin.cn/post/6974529351270268958#heading-20

- 强制缓存就是文件直接从本地缓存中获取,不需要发送请求。

![强制缓存 图1](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b5f04f37b588462ab7abf025cfa7c5a8~tplv-k3u1fbpfcp-watermark.awebp)

![强制缓存 图2](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2a925e79ee724f1099df19d9e61fff32~tplv-k3u1fbpfcp-watermark.awebp)

从上图中可以看到,此时浏览器已经接收到 `cache-control` 的值,那么这个时候浏览器再次发送请求时,它会先检查它的 `cache-control` 是否过期,如果没有过期则直接从本地缓存中拉取资源,返回到客户端,而无需再经过服务器。



- 协商缓存,也叫对比缓存。

  它是一种**服务端的缓存策略**,即通过服务端来判断某件事情是不是可以被缓存。

  服务端判断客户端的资源,是否和服务端资源一样,如果一致则返回 `304` ,反之返回 `200` 和最新的资源。

![协商缓存 图1](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5684907367bc4101b4e3f4bc23cdb760~tplv-k3u1fbpfcp-watermark.awebp)

## 4.11 什么是XSS、CSRF攻击

CSRF即Cross-site request forgery(跨站请求伪造),是一种挟制用户在当前已登录的Web应用程序上执行非本意的操作的攻击方法。

XSS即Cross Site Scripting（跨站脚本）,指的是通过利用网页开发时留下的漏洞,注入恶意指令代码到网页,使用户加载并执行攻击者恶意制造的网页程序。常见的例如在评论区植入JS代码,用户进入评论页时代码被执行,造成页面被植入广告、账号信息被窃取

**如何防御CSRF攻击**

- 验证`Token`：浏览器请求服务器时,服务器返回一个token,每个请求都需要同时带上token和cookie才会被认为是合法请求

- 验证`Referer`：通过验证请求头的Referer来验证来源站点,但请求头很容易伪造

- 设置`SameSite`：设置cookie的SameSite,可以让cookie不随跨域请求发出,但浏览器兼容不一

**如何防御XSS攻击**

- **输入检查**：对输入内容中的`<script><iframe>`等标签进行转义或者过滤
- **设置httpOnly**：很多XSS攻击目标都是窃取用户cookie伪造身份认证,设置此属性可防止JS获取cookie
- **开启CSP**,即开启白名单,可阻止白名单以外的资源加载和运行


## 4.2 https 加密过程是怎样的

参考: https://juejin.cn/post/6844904150115827725
