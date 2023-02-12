import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// 引入路由容器组件
import {BrowserRouter} from 'react-router-dom'
let root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<BrowserRouter><App/></BrowserRouter>)