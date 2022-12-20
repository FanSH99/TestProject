import { useEffect, useState } from 'react'
import NavBar from '../../components/NarBar/NavBar'
import { getHomeList } from '../../utils/api'
import './Home.css'
import LiveList from '../../components/LiveList/LiveList'
export default function Home() {

    let [list, setList] = useState([])
    useEffect(() => {
        async function fetch() {
            let res = await getHomeList();
            // console.log(res);
            setList(res.data.data)
        }
        fetch();


    }, [])


    return (
        <div className="page">
            <NavBar>首页</NavBar>
            <div className='main'>
                {
                    list.map((item, index) => {
                        return (
                            <div key={index}>
                                <LiveList item={item} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}