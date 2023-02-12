import { lazy,Suspense} from "react"
import {Navigate} from "react-router-dom"
// import Home from '../views/Home';
// import About from '../views/About';
// import Mine from '../views/Mine';
// import Login from "../views/Login";
// 路由懒加载搞定了
let Home = lazy(()=>import("../views/Home"))
let About = lazy(()=>import("../views/About"))
let Mine = lazy(()=>import("../views/Mine"))
let Login = lazy(()=>import("../views/Login"))
// 获取 当前登状态
let token = localStorage.getItem("token")
// 路由配置表
let routes =  [
    {
        path: "/home",
        element:<Suspense fallback="loading..."> <Home /></Suspense>,
     
    }, {
        path: "/about",
        // 路由守卫
        element: <Suspense fallback="loading..."> {token?<About />:<Navigate to='/login'/>}</Suspense>, 
    }, {
        path: "/mine",
        element: <Suspense fallback='loading...'>{token?<Mine />:<Navigate to='/login'/>}</Suspense>
    },{
        path:"/",
        element:<Navigate to='/home'/>
    },{
        path:"/login",
        element:<Suspense fallback='loading'><Login/></Suspense>
    }
]
export default routes