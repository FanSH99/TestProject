
import { useState, lazy, Suspense, useEffect } from 'react'
import './App.css';
import axios from 'axios';
// 引入子组件
import Child from './components/child/child';
// 组件懒加载
let Header = lazy(() => import("./components/header/header"))


function App() {
  let [num, setNum] = useState(0)
  useEffect(() => {

  }, [])
  let getGoodsList = () => {
    axios.get(`https://apif.java.crmeb.net/api/front/index/product/1/?page=1&limit=10`).then(res => {
      console.log(res)
    })
    axios.get("https://open.douyucdn.cn/api/RoomApi/live?offset=0&limit=20").then(res => {
      console.log(res)
    })
  }
  return (
    <div className="App">
      <h1>hello world {num}</h1>
      <Suspense fallback="加载中">
        {/* 若组件为加载则显示fallback内容 */}
        <Header />
      </Suspense>
      <button onClick={() => {
        num++;
        setNum(num)
      }}>num++</button>
      <Child num={num} />
      <button onClick={getGoodsList}>获取商品列表</button>

      <button onClick={() => {
        axios.get(`/douyu/api/RoomApi/live?offset=0&limit=20`).then(res => {
          console.log(res)
        })
      }}>跨域请求</button>
    </div>
  );
}

export default App;
