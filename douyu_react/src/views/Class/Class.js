import { useEffect, useState } from 'react'
import NavBar from '../../components/NarBar/NavBar'
import { getClassList } from '../../utils/api';
import { useNavigate } from 'react-router-dom'
import './Class.css'
export default function Class() {
    let [list, setList] = useState([])
    let navigate = useNavigate();
    useEffect(() => {
        async function fetch() {
            let res = await getClassList();
            // console.log(res);
            setList(res.data.data)
        }
        fetch();
    }, [])

    return (
        <div className='page'>
            <NavBar>分类</NavBar>
            <div className='classList'>
                {
                    list.map((item, index) => {
                        return (
                            <div key={index} className="classItem" onClick={() => {
                                // console.log(item)
                                navigate(`/classinfo/${item.cate_id}`)
                            }}>
                                <img src={item.game_icon} alt="" />
                                <p>{item.game_name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}