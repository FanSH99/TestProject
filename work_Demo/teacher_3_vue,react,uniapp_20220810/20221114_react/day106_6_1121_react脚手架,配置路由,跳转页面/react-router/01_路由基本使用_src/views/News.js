import { useState } from 'react'
function News() {
    let [list, setList] = useState([
        {
            title: "",
            id:103,
        },
        {
            title: "",
            id: 103,
        },
        {
            title: "",
            id: 103,
        },
    ])
    return (
        <div>
            <h1>新闻中心</h1>
            {
                list.map((item, index) => {
                    return <li></li>
                })
            }
        </div>
    );
}

export default News;