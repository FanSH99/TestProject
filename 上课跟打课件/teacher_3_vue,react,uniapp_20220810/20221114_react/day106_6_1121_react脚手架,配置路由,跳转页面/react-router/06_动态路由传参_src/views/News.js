import { useState } from 'react'
import { NavLink } from 'react-router-dom'
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
    return (
        <div>
            <h1>新闻中心</h1>
            {
                list.map((item, index) => {
                    return <li key={item.id}>
                        {/* /info?属性名=属性值&属性名=属性值 */}
                        <NavLink to={`/info?id=${item.id}&title=${item.title}`}>{item.title}</NavLink>
                    </li>
                })
            }
        </div>
    );
}

export default News;