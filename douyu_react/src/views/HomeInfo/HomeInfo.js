import { useEffect, useState } from 'react'
import NavBar from '../../components/NarBar/NavBar'
import { getLiveInfo } from '../../utils/api';
import { useParams } from 'react-router-dom'
import './HomeInfo.css'
export default function HomeInfo() {
    let [list, setList] = useState([])
    let params = useParams();

    useEffect(() => {
        async function fetch() {
            let res = await getLiveInfo(params.id);
            console.log(res);
            setList(res.data.data)
        }
        fetch();
    }, [])
    return (
        <div className='page'>
            <NavBar>直播详情</NavBar>
            <div className='liveInfo'>
                <img src={list.room_thumb}></img>
                <p>{list.room_name}</p>
            </div>
        </div>
    )
}