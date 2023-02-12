import React from 'react'
// 用来获取search 路由传递的参数
import { useSearchParams } from 'react-router-dom'
export default function Info() {
    // useSearchParams 有点类似于 useState 
    // search用来获取传递过来的参数， setSearch 用来改变页面参数
  let [search,setSearch] = useSearchParams();
  console.log(search)
   // 获取指定参数
  let id = search.get("id")
  console.log(id)
  let title = search.get("title")
  return (
    <div>
        <h2>新闻详情---{id}---{title}</h2>
         <button onClick={()=>{
            setSearch("id=104&title=小明被狗咬了一只嗷嗷叫")
         }}>下一个新闻</button>
    </div>
  )
}
