import { NavLink, Outlet } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>首页</h1>
            <Outlet></Outlet>
        </div>
    );
}

export default Home;