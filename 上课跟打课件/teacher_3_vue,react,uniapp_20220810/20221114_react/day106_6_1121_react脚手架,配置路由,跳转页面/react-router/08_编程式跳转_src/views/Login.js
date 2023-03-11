import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Login() {
    let [id, setId] = useState(99);
    let [title, setTitle] = useState("等风来")
    let navigate = useNavigate();
    let goMine = (id) => {
        console.log(id);
        navigate("/mine/" + id)
    }
    return (
        <div>登录页面
            <button onClick={() => {
                goMine(id)
            }}>进入我的页面</button>
            <button
                onClick={() => {
                    navigate("/about?title=" + title)
                }}>进入关于页面</button>
        </div>
    );
}

export default Login;