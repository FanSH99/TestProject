import { Navigate } from 'react-router-dom';

import Home from '../views/Home/Home';
import Class from '../views/Class/Class'
import ClassInfo from '../views/ClassInfo/ClassInfo'
import HomeInfo from '../views/HomeInfo/HomeInfo';
import Cart from '../views/Cart/Cart';
import Mine from '../views/Mine/Mine';

let routes = [
    {
        path: "/",
        element: <Navigate to="/home" />
    },
    {
        path: "/home",
        element: <Home />,

    },
    {
        path: "/homeinfo/:id",
        element: <HomeInfo />
    },
    {
        path: "/class",
        element: <Class />
    },
    {
        path: "/classinfo/:id",
        element: <ClassInfo />
    },
    {
        path: "/cart",
        element: <Cart />
    },
    {
        path: "/mine",
        element: <Mine />
    }
]
export default routes;