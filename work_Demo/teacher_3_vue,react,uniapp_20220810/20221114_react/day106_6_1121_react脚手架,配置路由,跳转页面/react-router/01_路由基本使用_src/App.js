import { NavLink, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Hello from './components/Hello/Hello'
import Home from './views/Home';
import About from './views/About';
import Mine from './views/Mine';
// React 18 默认使用函数式组件了
export default function App() {
  return (
    <div>
      <h1>路由的基本使用</h1>
      {/* navlink和link都可以用来跳转路由
      不同的是navlink有选中状态而link没有
      */}
      <NavLink to="/">home</NavLink> &ensp;
      <NavLink to="/cart">Cart</NavLink> &ensp;
      <NavLink to="/hello">Hello</NavLink> &ensp;
      <NavLink to="/about">about</NavLink> &ensp;
      <NavLink to="/mine">mine</NavLink> &ensp;
      <hr />
      <Routes>
        {/* path路由路径，element访问路由路径时展示的组件 */}
        <Route path='/' element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/hello" element={<Hello />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/mine' element={<Mine />}></Route>
      </Routes>
      <hr />
    </div >)
}