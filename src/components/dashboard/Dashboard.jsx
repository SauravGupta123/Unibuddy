import React, { useState } from "react"
import "./Dashboard.css"
import { Navigate, useNavigate } from "react-router-dom"
import ChangePassword from "./ChangePassword";



const Dashboard = (props) => {
    const [showChangeComponent, setShowChangeComponent] = useState(false);
    const navigate = useNavigate()


    const handleLogout = () => {
        setShowChangeComponent(false)
        props.setLoginUser(null);

        setTimeout(() => {
            
            alert("logged Out Successfully")
            navigate("/login")
            
        }, 300);
    }
    const handleClick = () => {
        if (showChangeComponent) {

            setShowChangeComponent(false)
        }
        else {
            setShowChangeComponent(true)
        }
    }
    return (
        <div className="container bg-blue-200 w-full flex flex-row place-content-between">

            <div className="relative top-36 left-20">
                <h1>STUDENTS DASHBOARD</h1>
                <h1>Welcome {props.user.firstName}  {props.user.lastName} 😊 </h1>
                <h2>
                    enrollment no= {props.user.enrollmentNo}
                </h2>
            </div>
            <div className="buttons ">
                <button className="btn btn-blue mr-5 " onClick={handleClick} >Change password</button>
                <button className="btn btn-blue" onClick={handleLogout}> Log Out</button>
                <div className="relative left-8">

                {showChangeComponent && <ChangePassword enrollNo={props.user.enrollmentNo} />}
                </div>
            </div>
           
        </div>
    )
}


export default Dashboard

