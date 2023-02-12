import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    let [name, setName] = useState("");
    let [age, setAge] = useState("")
    let navigate = useNavigate();
    return (
        <div>
            姓名： <input type="text" onChange={(e) => {
                setName(e.target.value)
            }} /><br />
            年龄：<input type="text" onChange={(e) => {
                setAge(e.target.value)
            }} /> <br />
            <button className="button" onClick={() => {
                localStorage.setItem("token", { name, age });
                alert("登录成功")
                navigate("/home")
            }}>登录</button>
        </div>

    )
}

export default Login;