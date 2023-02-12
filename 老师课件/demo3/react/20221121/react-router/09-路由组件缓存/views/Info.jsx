import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Info() {
    let navgate =useNavigate();
  return (
    <div>
        <h1><button onClick={()=>{
            navgate(-1)
        }}>返回</button> 详情页</h1>
    </div>
  )
}
