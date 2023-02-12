## typeScript 是什么？
typeScript 是javaScript 的超集
typeScript 可以编译成javaScript 并且可以运行在任意浏览器，任意操作系统 并且还是开源

## 为什么要学typeScript?
typeScript市场需求量相当大。
使用typeScript可以提高开发效率。
主流前端框架 vue3.x版本源码就是使用的ts编写

## typeScript 与 javaScript 的区别?
所有的编程语言分为两种：
1. 静态编程语言：在编写代码的过程中就校验了语法规范 (java c++ c# typeScipt ...)
2. 动态编程语言：在代码执行时才会校验语法规范 （js php ...）

## 如何使用typeScript?
安装ts环境：
npm install -g typescript

tsc -v检查ts版本

tsc 文件名称 可以将ts文件编译成js文件
tsc 文件名称 -w  文件追踪 只要ts文件发生改变了那么就是自动编译成js文件

当执行tsc 命令时，ts会在当前项目下查询tsconfig.json配置文件，若配置文件中没有声明要编译那些文件，ts会默认将当前目录下所有的ts文件编译成js
