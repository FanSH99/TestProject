import React from 'react'
import {NavLink} from 'react-router-dom'
// 用于展示子路由
import {Outlet} from "react-router-dom"
export default function Home() {
  return (
    <div>
      <h1>首页</h1>
      <NavLink to="login">登录</NavLink>
      <NavLink to="/home/news">新闻</NavLink>
      {/* 展示子路由 */}
      <Outlet/>
    </div>
  )
}
