import React from 'react'
// useLocation 获取当前路由详细信息
import { useLocation } from 'react-router-dom'
export default function Info() {
  let location = useLocation();
  console.log(location)
  // 获取state属性传递的参数
  let {id,titel} = location.state;
  return (
    <div>
        <h2>新闻详情-{id}-{titel}</h2>
    </div>
  )
}
