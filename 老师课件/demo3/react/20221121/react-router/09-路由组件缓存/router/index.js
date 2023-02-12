import {useRoutes} from 'react-router-dom'
import {Fragment} from 'react'
import Home from '../views/Home'
import Info from '../views/Info'
// 引入缓存组件
import KeepAlive from 'react-activation'
function Myrouter(){
    
     let element = useRoutes([
        {
            path:"/",
            // 缓存home组件 必须绑定一个id
            element:<KeepAlive id='home'><Home/></KeepAlive>
        },{
            path:'/info',
            element:<Info/>
        }
     ])
    return (
        <Fragment>
            {
                element
            }
        </Fragment>
    )
}
export default Myrouter;