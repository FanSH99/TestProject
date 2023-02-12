import React from 'react'
// useParams 获取动态路由的动态参数
import {useParams} from 'react-router-dom'
export default function Info() {
    // useParams 获取动态路由的动态参数
    let params = useParams();
    let {id,title} = params
    console.log(params,id,title )
  return (
    <div>
        <h2>新闻详情</h2>
    </div>
  )
}
