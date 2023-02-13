import { name, age } from './user.js';
import like from "./like.js";
export default function say() {
    return `我叫${name}今年${age}岁了喜欢${like}`
}