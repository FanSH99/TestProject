import "./App.css"
// import Child from "./components/child/child";
// lazy组件懒加载
import {useState,lazy,Suspense, useEffect} from 'react'
import axios from 'axios';
// lazy组件懒加载
let Child = lazy(()=>import("./components/child/child"))
function App(){
    let [num,setNum] = useState(0)
    useEffect(()=>{

    },[])
    //获取商品列表
    let getGoodsList = ()=>{
        axios.get(`https://apif.java.crmeb.net/api/front/index/product/1/?page=1&limit=10`).then(res=>{
            console.log(res)
        })
    }
    return (
         <div>
            <h1>hello word {num}</h1>
            <button onClick={()=>{
                num++;
                setNum(num)
            }}>++</button>
            <Suspense fallback="加载中">
            {/* 若组件为加载则 显示fallback内容 */}
               <Child num={num}/>
            </Suspense>
            <button onClick={getGoodsList}>获取商品列表</button>
            <button onClick={()=>{
                axios.get(`/douyu/api/RoomApi/live?offset=0&limit=20`).then(res=>{
                    console.log(res)
                })
            }}>跨域请求</button>
         </div>
    )
}
export default App;