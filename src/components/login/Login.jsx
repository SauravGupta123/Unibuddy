import React, {useState} from "react"
import "./login.css"
import axios from "axios"
import { Navigate, useNavigate } from "react-router-dom"

const Login = ({setLoginUser}) => {

    const navigate = useNavigate()

    const [ user, setUser] = useState({
        enrollmentNo:"",
        password:"",
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:3000/login", user)
        .then(res => {
               alert(res.data.message);
              
            //    setLoginUser({
            //        isLogin:true,
            //        firstName:res.data.user.firstName,
            //        lastName:res.data.user.lastName
            //     })
            setLoginUser(res.data.user)
        
                navigate("/");
        }).catch(err=>{
          console.log("error",err)
        })
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <input type="number" name="enrollmentNo" value={user.enrollmentNo} onChange={handleChange} placeholder="Enter your enrollmentNo"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => navigate("/signup")}>Signup</div>
        </div>
    )
}

export default Login