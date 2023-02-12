## 安装react-cli
npm i -g create-react-app

## 检测是否成功
create-react-app查看是否安装成功

## 创建项目
create-react-app xxx ---这个命令创建比较慢
或者npx create-react-app xxx

默认端口号是localhost://3000

## 请求
npm i axios
import axios from 'axios'
useEffect(()=>{},[])中写请求或者
let getList=()=>{};
<button onClick={getList}>请求</button>

## 跨域请求
npm i http-proxy-middleware --save

src目录下创建setupProxy.js

const { createProxyMiddleware } = require('http-proxy-middleware');

// 解决跨域
module.exports = function (app) {
    app.use(
        '/douyu',
        createProxyMiddleware({
            target: 'https://open.douyucdn.cn',
            changeOrigin: true,
        })
    );
};

"/douyu/api/RoomApi/live?offset=0&limit=20" --发送请求即可。

如果没有解决，则进行如下步骤
重新开启终端，npm run eject
找到@/scripts/start.js
添加require('../src/setupProxy');
重新开启即可。

App.js
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


