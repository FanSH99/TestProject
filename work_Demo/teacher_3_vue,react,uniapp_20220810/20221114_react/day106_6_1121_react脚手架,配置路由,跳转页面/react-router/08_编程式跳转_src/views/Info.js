import { useLocation, useNavigate } from 'react-router-dom'
export default function Info() {

    let location = useLocation();
    let navigate = useNavigate();
    // console.log(location);
    let { id, title } = location.state
    return (
        <div>
            新闻详情--{id}--{title}
            <button onClick={() => {
                navigate(-1)
            }}>返回</button>
            <button onClick={() => {
                navigate(1)
            }}>后退</button>
        </div>
    )
}