import React from "react";
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import {AliveScope} from 'react-activation'
let root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
    <BrowserRouter>
    <AliveScope>
    <App></App>
    </AliveScope>
    </BrowserRouter>
)