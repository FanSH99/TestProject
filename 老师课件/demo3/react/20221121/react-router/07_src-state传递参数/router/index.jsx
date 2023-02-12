import { useRoutes} from 'react-router-dom'
import {Fragment} from 'react'
// 导入路由配置表
import routes from './element.js'
function Myrouter() {
    //  hooks useRoutes用来生成路由配置节点（路由表)
    let element = useRoutes(routes)
    return (
        // <Routes>
        //     {/* path 路由路径 element 当访问路由路径时展示那个组件 */}
        //     <Route path='/home' element={<Home />}></Route>
        //     <Route path='/about' element={<About />}></Route>
        //     <Route path='/mine' element={<Mine />}></Route>
        //     {/* 路由重定向
        //        只要Navigate被渲染一次那么路由就会被重新访问一次 
        //     */}
        //     <Route path='/' element={<Navigate to='/home'></Navigate>}></Route>
        // </Routes>
            <Fragment>
                {element}
            </Fragment>
    )
}

export default Myrouter;