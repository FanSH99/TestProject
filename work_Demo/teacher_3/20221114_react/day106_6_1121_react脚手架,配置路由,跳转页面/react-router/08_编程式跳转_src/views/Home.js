import { NavLink, Outlet } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>首页</h1>
            <NavLink to="/home/login">登录</NavLink>&ensp;
            <NavLink to="/home/news">新闻</NavLink>
            {/* 展示子路由 */}
            <Outlet></Outlet>
        </div>
    );
}

export default Home;