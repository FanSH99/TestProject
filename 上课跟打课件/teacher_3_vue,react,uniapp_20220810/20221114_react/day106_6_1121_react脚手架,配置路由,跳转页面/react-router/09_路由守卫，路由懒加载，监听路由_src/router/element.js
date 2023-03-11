import { Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react'
import Home from '../views/Home';
import About from '../views/About';
import Mine from '../views/Mine';
import Login from '../views/Login';
import Info from '../views/Info';
// 路由懒加载 --懒加载需要结合Suspense来使用，否则报错。
let News = lazy(() => import('../views/News'));

let token = localStorage.getItem("token");
let routes = [
    {
        path: "/home",
        element: <Home />,

    },
    {
        path: "/news",
        // Lazy需要结合Suspense来使用
        element: <Suspense fallback="loading..."><News /></Suspense>
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/about",
        // 路由守卫
        element: token ? <About /> : <Navigate to="/login" />
    },
    {
        path: "/mine/:id",
        element: token ? <Mine /> : <Navigate to="/login" />
    },
    {
        path: "/",
        element: <Navigate to="/home"></Navigate>
    },
    {
        path: "/info",
        element: <Info />
    }
]
export default routes;