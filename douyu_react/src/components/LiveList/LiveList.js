import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import tv from '../.././static/tv.png'
import love from '../.././static/love.png'
export default function Info(props) {
    let { item } = props;
    let navigate = useNavigate();
    return (
        <div className="list" onClick={() => {
            // console.log(item);
            navigate(`/homeinfo/${item.room_id}`)
        }}>
            <div className="imgbox">
                <img src={item.room_src} alt="" />
                <div className='back'>
                    <p className='bottom'><span>{item.nickname}</span><span><i><img src={love} /></i>{item.hn}</span></p>
                </div>
            </div>
            <p className='title'><i><img src={tv} /></i>{item.room_name}</p>
        </div>
    )
}