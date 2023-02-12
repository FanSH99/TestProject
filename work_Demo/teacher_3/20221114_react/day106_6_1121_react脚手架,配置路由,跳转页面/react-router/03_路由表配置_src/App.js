import { NavLink } from 'react-router-dom';
import Myrouter from './router';

// React 18 默认使用函数式组件了
export default function App() {
  return (
    <div>
      <h1>路由表</h1>
      {/* navlink和link都可以用来跳转路由
      不同的是navlink有选中状态而link没有
      */}
      <NavLink to="/home">home</NavLink> &ensp;
      <NavLink to="/about">about</NavLink> &ensp;
      <NavLink to="/mine">mine</NavLink> &ensp;
      <hr />
      <Myrouter />
    </div >)
}