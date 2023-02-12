// 2022年9月14日10:18:32
import user from './js/a'
import { say } from './js/b'
// webpack默认只能打包js 如果想要打包Css,图片等其他类型文件，需要编写webpack配置文件。
// import './css/index.css'

console.log(user);
say();

// npm i wabpack webpack-cli
// npx webpack  ---在根目录下打包，

/* 
webpack打包的基本流程。
1.初始化项目 npm init 
2.安装webpack  npm i webpack webpack-cli
3.编写开发目录 src
4.编写打包配置 webpack.config.js
5.配置打包
6.在根目录下打包，npx webpack 默认打包入口:src/index.js
*/