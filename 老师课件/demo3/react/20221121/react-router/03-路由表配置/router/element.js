import {Navigate} from "react-router-dom"
import Home from '../views/Home';
import About from '../views/About';
import Mine from '../views/Mine';
// 路由配置表
let routes =  [
    {
        path: "/home",
        element: <Home />
    }, {
        path: "/about",
        element: <About />
    }, {
        path: "/mine",
        element: <Mine />
    },{
        path:"/",
        element:<Navigate to='/home'/>
    }
]
export default routes