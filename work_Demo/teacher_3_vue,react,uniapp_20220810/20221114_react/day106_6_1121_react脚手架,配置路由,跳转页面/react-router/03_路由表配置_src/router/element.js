import { Navigate } from 'react-router-dom';
import Home from '../views/Home';
import About from '../views/About';
import Mine from '../views/Mine';
import Login from '../views/Login';
let routes = [
    {
        path: "/home",
        element: <Home />
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
    {
        path: "/login",
        element: <Login />
    }
]
export default routes;