import {Navigate} from "react-router-dom"
import Home from '../views/Home';
import About from '../views/About';
import Mine from '../views/Mine';
import Login from "../views/Login";
import News from '../views/News'
import Info from '../views/Info'
// 路由配置表
let routes =  [
    {
        path: "/home",
        element: <Home />,
        // 定义子路由 子路由路径必须加上父路由路径定义
        children:[
            {
                path:"/home/login",
                element:<Login/>
            },{
                path:"/home/news",
                element:<News/>
            
            },{
                path:"/home",
                element:<Navigate to='/home/login'></Navigate>
            }
        ]
    }, {
        path: "/about",
        element: <About />
    }, {
        path: "/mine",
        element: <Mine />
    },{
        path:"/",
        element:<Navigate to='/home'/>
    },{
        path:"/info",
        element:<Info/>
    }
]
export default routes