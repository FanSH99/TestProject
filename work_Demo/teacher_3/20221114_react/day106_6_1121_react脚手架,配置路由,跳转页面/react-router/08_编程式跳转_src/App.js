import { NavLink } from 'react-router-dom';
import Myrouter from './router';

// React 18 默认使用函数式组件了
export default function App() {
  return (
    <div>
      <h1>编程式传参</h1>
      {/* navlink和link都可以用来跳转路由
      不同的是navlink有选中状态而link没有
      navlink标签中添加end属性，则选中当前页面的子路由时父路由不再高亮。默认都高亮。
      */}
      <NavLink to="/home" end>home</NavLink> &ensp;
      <NavLink to="/about">about</NavLink> &ensp;
      <hr />
      <Myrouter />
    </div >)
}