import React from 'react'
import "./App.css"
// Route 用来定义路由匹配规则 Routes用来包裹匹配规则
import {Route,Routes,NavLink,Navigate} from 'react-router-dom'
import Home from './views/Home';
import About from './views/About';
import Mine from './views/Mine';
export default function App() {
  return (
    <div>
        <h1>路由的基本使用</h1>
        {/*
         NavLink 和 Link组件都 可以用来跳转路由，
         不同的是 NavLink组件有选中状态而Link没有
        */}
        <NavLink to='/home'>首页</NavLink>
        <NavLink to='/about'>关于</NavLink>
        <NavLink to='/mine'>我的</NavLink>
        <Routes>
            {/* path 路由路径 element 当访问路由路径时展示那个组件 */}
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/mine' element={<Mine/>}></Route>
            {/* 路由重定向
               只要Navigate被渲染一次那么路由就会被重新访问一次 
            */}
            <Route path='/' element={<Navigate to='/home'></Navigate>}></Route>
        </Routes>
    </div>
  )
}
