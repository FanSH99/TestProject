import { NavLink, Routes, Route, Navigate } from 'react-router-dom';

import Home from './views/Home';
import About from './views/About';
import Mine from './views/Mine';
// React 18 默认使用函数式组件了
export default function App() {
  return (
    <div>
      <h1>路由重定向</h1>
      {/* navlink和link都可以用来跳转路由
      不同的是navlink有选中状态而link没有
      */}
      <NavLink to="/home">home</NavLink> &ensp;
      <NavLink to="/about">about</NavLink> &ensp;
      <NavLink to="/mine">mine</NavLink> &ensp;
      <hr />
      <Routes>
        {/* path路由路径，element访问路由路径时展示的组件 */}
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/mine' element={<Mine />}></Route>
        {/* 路由重定向，
        只要navigate被渲染一次，路由就会重新访问。
        2022年11月21日16:09:22
        */}
        <Route path='/' element={<Navigate to="/home"></Navigate>}></Route>
      </Routes>
      <hr />
    </div >)
}