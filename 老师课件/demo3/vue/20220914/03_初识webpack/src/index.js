import user from './js/login.js';
import {sex,getList} from './js/home.js'
console.log(user)
console.log(sex)
console.log(getList())

/* 
webpack流程：
1. npm init 初始化项目
2. npm i webpack webpack-cli
3. src开发目录 public静态资源
4. npx webpack 开始打包
webpack默认只能打包js文件，并且默认入口为src/index.js
*/