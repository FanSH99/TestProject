import { useRoutes } from 'react-router-dom';
import { Fragment } from 'react'

// import Home from '../views/Home';
// import About from '../views/About';
// import Mine from '../views/Mine';
// import Login from '../views/Login';

// 导入路由配置表
import routes from './element';
function Myrouter() {
    // hooks useRoutes用来生成路由表
    // let element = useRoutes([
    //     {
    //         path: "/home",
    //         element: <Home />
    //     },
    //     {
    //         path: "/about",
    //         element: <About />
    //     },
    //     {
    //         path: "/mine",
    //         element: <Mine />
    //     },
    //     {
    //         path: "/",
    //         element: <Navigate to="/home"></Navigate>
    //     },
    //     {
    //         path: "/login",
    //         element: <Login />
    //     }

    // ])
    let element = useRoutes(routes)
    // console.log(element);
    return (
        // <Routes>
        //     <Route path='/home' element={<Home />}></Route>
        //     <Route path='/about' element={<About />}></Route>
        //     <Route path='/mine' element={<Mine />}></Route>
        //     <Route path='/' element={<Navigate to="/home"></Navigate>}></Route>
        // </Routes>
        <Fragment>
            {element}
        </Fragment>

    );
}

export default Myrouter;