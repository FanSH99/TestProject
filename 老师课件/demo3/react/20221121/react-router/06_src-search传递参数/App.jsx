import React from 'react'
import "./App.css"
// Route 用来定义路由匹配规则 Routes用来包裹匹配规则
import {NavLink} from 'react-router-dom'
import Myrouter from './router'
export default function App() {
  return (
    <div>
        <h1>路由的基本使用</h1>
        {/*
         NavLink 和 Link组件都 可以用来跳转路由，
         不同的是 NavLink组件有选中状态而Link没有
        */}
        {/* 
          end属性表示 当选中子路由时父路由不会高亮 若不加end属性默认父路由也会高亮
        */}
        <NavLink to='/home' end>首页</NavLink>
        <NavLink to='/about'>关于</NavLink>
        <NavLink to='/mine'>我的</NavLink>
        <Myrouter/>
    </div>
  )
}
