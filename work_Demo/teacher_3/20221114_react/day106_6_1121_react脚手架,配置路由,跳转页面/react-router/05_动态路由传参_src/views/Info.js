import { useParams } from 'react-router-dom'
export default function Info() {
    // 获取动态属性
    let params = useParams();
    console.log(params);
    // 解构动态属性
    let { id, title } = params
    return (
        <div>
            新闻详情--{title}--{id}
        </div>
    )
}