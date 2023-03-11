## 什么是TypeScript?

TypeScript是JavaScript的超集。开源。
浏览器不能直接识别TypeScript语言，
TypeScript可以编译成JavaScript，之后就可以运行在任何操作系统。

## 为什么要学TypeScript?

1.TypeScript市场需求量相当大，目前很多公司都采用TypeScript加vue来构建项目。
2.使用TypeScript可以提高开发效率。
3.目前主流框架Vue3的源码就是TypeScript。

## TypeScript和JavaScript的区别。

所有的编程语言分为两种：
1.动态编程语言。只有运行过程中才会提示错误。没有声明变量但是使用了，编写时不报错。 例如JS，Python，PHP
2.静态编程语言。在编写代码的过程中就可以校验语法规范。例如java，C,C++,C#,TypeScript

## 如何使用TypeScript

1.安装TypeScript环境。npm i -g typescript
2.检测是否安装成功  tsc -v检测版本号。

TypeScript文件后缀是ts
ts文件中可以写js代码。

## TypeScript如何编译成js
ts文件在终端中打开。
tsc -v 检测版本
tsc 文件名称 （不同步变化）
tsc 文件名称 -w （文件追踪，同步变化）
tsc 全部编译
tsc -w全部编译并追踪

ts文件改变之后生成的js文件不会跟着改变。
需要tsc 文件名称 -w 文件追踪  只要ts文件改变，会自动重新编译成js文件，js文件也就跟着改变。


当执行tsc命令时，ts会在当前项目下查找tsconfig.json配置文件，
若配置文件中没有声明编译那些文件，会默认将当前目录下所有ts文件编译成js

// 2022年10月10日09:16:31

## 配置tsconfig.json
{
    // 要编译那些文件
    "include": [
        "src/**/*"
    ],
    // 不编译那些文件
    "exclude": []
}