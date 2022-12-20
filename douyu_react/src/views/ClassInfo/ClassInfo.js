import { useEffect, useState } from 'react'
import NavBar from '../../components/NarBar/NavBar'
import { getClassInfo } from '../../utils/api';
import { useParams } from 'react-router-dom'
import LiveList from '../../components/LiveList/LiveList'
export default function ClassInfo() {
    let [list, setList] = useState([])
    let params = useParams();
    useEffect(() => {
        async function fetch() {
            let res = await getClassInfo(params.id);
            console.log(res);
            setList(res.data.data)
        }
        fetch();
    }, [])
    return (
        <div className='page'>
            <NavBar>分类详情</NavBar>
            <div class="main">
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