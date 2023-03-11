import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function News() {

    let [list] = useState([
        {
            title: "同一个地球同一个梦想",
            id: 101,
        },
        {
            title: "官方：无疫情地区不得扩大核酸检测范围",
            id: 102,
        },
        {
            title: "3名女生殴打13岁同校女生被抓",
            id: 103,
        },
    ])
    let navigate = useNavigate();
    let goInfo = (item) => {

        navigate(`/info`, {
            state: {
                id: item.id,
                title: item.title
            }
        })
        // navigate(`/info/${id}/${title}`)

    }
    return (
        <div>
            <h1>新闻中心</h1>
            {
                list.map((item, index) => {
                    return <li key={item.id} onClick={() => {
                        goInfo(item)
                    }}>
                        {item.title}
                    </li>
                })
            }
        </div>
    );
}

export default News;