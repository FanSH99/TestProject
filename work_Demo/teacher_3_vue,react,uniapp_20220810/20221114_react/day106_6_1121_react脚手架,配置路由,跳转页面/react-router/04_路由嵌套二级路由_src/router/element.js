import { Navigate } from 'react-router-dom';
import Home from '../views/Home';
import About from '../views/About';
import Mine from '../views/Mine';
import Login from '../views/Login';
import News from '../views/News';
let routes = [
    {
        path: "/home",
        element: <Home />,
        // 二级子路由，路由嵌套
        children: [
            {
                path: "/home/news",
                element: <News />
            },
            {
                path: "/home/login",
                element: <Login />
            },
            {
                path: "/home",
                element: <Navigate to="/home/login"></Navigate>
            },

        ]
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/mine",
        element: <Mine />
    },
    {
        path: "/",
        element: <Navigate to="/home"></Navigate>
    },
]
export default routes;