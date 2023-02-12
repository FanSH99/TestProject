import {useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import { useActivate } from 'react-activation';
export default function Home() {
  let [list,setList] = useState([]);
  useEffect(()=>{
    axios.get(`https://game.gtimg.cn/images/lol/act/img/js/heroList/hero_list.js`).then(res=>{
        console.log(res)
        setList(res.data.hero)
    })
  },[])
  let navgate = useNavigate();

  useActivate(()=>{
    console.log("组件再次激活后调用")
  })
  return (
    <div>
        {
            list.map((item,index) =>{
                return(
                    <div key={index} onClick={()=>{
                        navgate("/info")
                    }}>
                        <img src={`https://game.gtimg.cn/images/lol/act/img/champion/${item.alias}.png`} alt="" />
                        <div>{item.title}</div>
                    </div>
                )
            })
        }
    </div>
  )
}
