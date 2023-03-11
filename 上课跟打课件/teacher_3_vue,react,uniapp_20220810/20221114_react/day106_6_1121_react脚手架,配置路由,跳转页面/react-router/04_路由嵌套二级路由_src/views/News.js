import { useState } from 'react'
function News() {
    let [list, setList] = useState([
        {
            title: "111",
            id: 103,
        },
        {
            title: "222",
            id: 103,
        },
        {
            title: "333",
            id: 103,
        },
    ])
    return (
        <div>
            <h1>新闻中心</h1>
            {
                list.map((item, index) => {
                    return <li key={index}>{item.title}</li>
                })
            }
        </div>
    );
}

export default News;