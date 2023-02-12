## 安装react-router
npm i react-router-dom

## 引入
index.js中：
import { BrowserRouter } from 'react-router-dom'
<BrowserRouter>包裹的路由切换没有#号
 <BrowserRouter>    <App />  </BrowserRouter>

## 基本使用
App.js中：
import { NavLink, Routes, Route } from 'react-router-dom';

<NavLink> 可以用来跳转路由
 <NavLink to="/about">About</NavLink>

 <Route>用来定义路由匹配规则
 <Routes>用来包裹匹配规则

  <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/hello" element={<Hello />}></Route>
      </Routes>
 ## 封装匹配规则

 src中新建router文件夹


 ## 解决报错

 useRoutes() may be used only in the context of a <Router> component.

 index.js中 <BrowserRouter>    <App />  </BrowserRouter>



