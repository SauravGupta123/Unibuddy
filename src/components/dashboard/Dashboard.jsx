import React, { useState } from "react"
import "./Dashboard.css"
import { Navigate, useNavigate } from "react-router-dom"
import ChangePassword from "./ChangePassword";



const Dashboard = (props) => {
    const [showChangeComponent, setShowChangeComponent]=useState(false);
    const navigate = useNavigate()
    const handleLogout = () => {
        alert("logged Out Successfully")
        props.setLoginUser({ _id: null });
        console.log(props.user);
    }
    const handleClick=()=>{
        if(showChangeComponent){

            setShowChangeComponent(false)}
            else{
              setShowChangeComponent(true)
            }
    }
    return (
        <div className="container bg-blue-200-300 w-full p-28">
            <div>

            <h1>STUDENTS DASHBOARD</h1>
            <h1>Welcome {props.user.firstName}  {props.user.lastName} 😊 </h1>
            <h2>
                enrollment no= {props.user.enrollmentNo}
            </h2>
            <button className="btn btn-blue mr-5 " onClick={handleClick} >Change password</button>
            <button className="btn btn-blue" onClick={handleLogout}> Log Out</button>
          
            </div>

            {showChangeComponent && <ChangePassword enrollNo={props.user.enrollmentNo}/>}
        </div>
    )
}


export default Dashboard

