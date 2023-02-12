import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
export default function News() {
 let [list] = useState([
    {
        msg:"同世界相互交融相互成就",
        id:101
    },{
        msg:"官方：无疫情地区不得扩大核检范围",
        id:102
    },{
        msg:"3名女生殴打13岁同校女孩被抓",
        id:103
    }
 ])
  return (
    <div>
        <h4>新闻中心</h4>
        <ol>
            {
                list.map(item=>{
                        return <li key={item.id}>
                            {/* 
                            state属性传递参数
                            */}
                           <NavLink  to='/info' state={{
                            id:item.id,
                            titel:item.msg
                           }}> {item.msg}</NavLink>
                        </li>
                })
            }
        </ol>
    </div>
  )
}
