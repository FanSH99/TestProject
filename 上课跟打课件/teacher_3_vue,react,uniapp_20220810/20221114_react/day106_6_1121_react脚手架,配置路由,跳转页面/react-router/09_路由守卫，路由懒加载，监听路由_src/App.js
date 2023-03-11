import { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Myrouter from './router';

// React 18 默认使用函数式组件了
export default function App() {

  // 获取路由信息对象
  let location = useLocation();
  console.log(location);
  // 使用useLocation结合，useEffect hooks实现监听
  useEffect(() => {
    // 监听到路由改变
    console.log("路由改变了");
  }, [location])
  return (
    <div>
      <h1>路由守卫，监听路由,路由懒加载</h1>
      {/* navlink和link都可以用来跳转路由
      不同的是navlink有选中状态而link没有
      navlink标签中添加end属性，则选中当前页面的子路由时父路由不再高亮。默认都高亮。
      */}
      <NavLink to="/home" end>home</NavLink> &ensp;
      <NavLink to="/about">about</NavLink> &ensp;
      <NavLink to="/login">登录</NavLink>&ensp;
      <NavLink to="/news">新闻</NavLink>
      <hr />
      <Myrouter />
    </div >)
}