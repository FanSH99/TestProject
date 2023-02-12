import { useLocation } from 'react-router-dom'
export default function Info() {
    // useLocation()获取当前路由详细信息。携带的信息存储在state中。
    // react无论哪一种刷新都不会丢失数据。vue中params和search传参等刷新会丢失数据。
    let location = useLocation();
    console.log(location);
    let { id, title } = location.state;
    return (
        <div>
            新闻详情--{id}--{title}
        </div>
    )
}