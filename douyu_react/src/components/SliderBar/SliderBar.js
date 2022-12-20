import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import gloabContext from '../../utils/context'
import arrow_right from '../../static/arrow_right.png'
import './SliderBar.css'
export default function SliderBar() {
    let context = useContext(gloabContext)
    // console.log(context);
    let navigate = useNavigate();
    let [sliderList, setList] = useState([
        {
            path: "/home",
            title: "首页",
        },
        {
            path: "/class",
            title: "分类",
        },
        {
            path: "/cart",
            title: "购物车",
        },
        {
            path: "/mine",
            title: "我的",
        },
    ])
    return (
        <div className='slider'>
            {
                sliderList.map((item, index) => {
                    return (
                        <div key={index} onClick={() => {
                            console.log(context);

                            // console.log(item, item.title, item.path);
                            navigate(item.path)
                            context.fun(false)
                        }}>{item.title}<i><img src={arrow_right} /></i></div>
                    )
                })
            }
        </div >
    )
}