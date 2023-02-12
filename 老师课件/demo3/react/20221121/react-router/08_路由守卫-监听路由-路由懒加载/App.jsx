import React ,{useEffect}from 'react'
import "./App.css"
// Route 用来定义路由匹配规则 Routes用来包裹匹配规则
import {useNavigate,useLocation} from 'react-router-dom'
import Myrouter from './router'
export default function App() {
  let navigate = useNavigate();
  // 获取当前路由信息对象
  let loaction = useLocation();
  console.log(loaction)
  // 使用useLocation 结合 useEffect hooks实现监听
  useEffect(()=>{
    // 监听到路由改变
      console.log("路由改变了")
  },[loaction])
  return (
    <div>
        <h1>路由守卫</h1>
        <button onClick={()=>{
          navigate("/home")
        }}>首页</button>
        <button onClick={()=>{
          navigate("/mine")
        }}>我的</button>
        <button onClick={()=>{
          navigate("/about")
        }}>about</button>
        <Myrouter/>
    </div>
  )
}
