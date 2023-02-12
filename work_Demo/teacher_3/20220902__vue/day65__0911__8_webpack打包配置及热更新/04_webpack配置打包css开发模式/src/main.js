import user from './js/a'
import { say } from './js/b'
// webpack默认只能打包js 如果想要打包Css,图片等其他类型文件，需要编写webpack配置文件。
// 2022年9月14日11: 11: 53
import '../css/index.css'

console.log(user);
say();