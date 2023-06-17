import React, {useState} from 'react'
import './Dashboard.css'
import axios from "axios"

function ChangePassword(props) {
  const [ user, setUser] = useState({
    currentPass:"",
    newPass:"",
    confirmPass:"",
    enrollmentNo:props.enrollNo
 
})
  const reqChange=()=>{
        
      console.log(user);
      const {currentPass, newPass, confirmPass,enrollNo}=user;
      if(newPass==confirmPass){
      axios.post("http://localhost:3000/changePassword", user)
      .then(res => {
          alert(res.data.message)
      }).catch(err=>{
        console.log("error found: ", err);
      })
    }
    else{
      alert("password didn't matched")
    }


  }

  const handleChange=(e)=>{
    const { name, value } = e.target
    setUser({
        ...user,
        [name]: value
    })

  }
  
  return (
    <section className="login border-4 border-yellow-300 mt-4 mr-0 w-52">
           <form action="/" method='post'>
            <label htmlFor="currentPass" >current Password: </label>
            <input className=" border-black" type="password" id="currentPass" name="currentPass" value={user.currentPass} onChange={handleChange} required/>

            <label htmlFor="newPass">new Password: </label>
            <input className=" border-black"type="password" id="newPass" name="newPass" value={user.newPass} onChange={handleChange} required/>
            
            <label htmlFor="confirmPass">confirm Password: </label>
            <input className=" border-black"type="password" id="confirmPass" name="confirmPass" value={user.confirmPass} onChange={handleChange} required/>

            <input type="button" name="submit" value="submit" className='btn btn-blue'  onClick={reqChange} />
            
            </form>         
    </section>
  )
}

export default ChangePassword
