import React, { useState } from "react"
import "./signup.css"
import axios from "axios"
import { Navigate, useNavigate } from "react-router-dom"

const Register = () => {

    const navigate = useNavigate()

    const [ user, setUser] = useState({
        firstName: "",
        lastName: "",
        enrollmentNo:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { firstName,lastName, enrollmentNo, password, reEnterPassword } = user
        if( firstName && lastName && enrollmentNo && password && (password === reEnterPassword)){
            axios.post("http://localhost:3000/signup", user)
            .then( res => {
                console.log("res recieved");
                alert(res.data.message)
                navigate('/login');
                
            }).catch(error => {
                console.log("Error:", error);
                // ... Handle the error here
              });
        } else {
            alert("invlid input")
        }
        
    }

    return (
        <div className="register">
            {console.log("User", user)}
            <h1>Register</h1>
            <input type="text" name="firstName" value={user.firstName} placeholder="First Name" onChange={ handleChange }></input>
            <input type="text" name="lastName" value={user.lastName} placeholder="Last Name" onChange={ handleChange }></input>
            <input type="number" name="enrollmentNo" value={user.enrollmentNo} placeholder="Your enrollmentNo" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
            <div className="button" onClick={register} >Register</div>
            <div>or</div>
            <div className="button" onClick={() =>navigate("/login")}>Login</div>
        </div>
    )
}

export default Register