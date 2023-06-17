import {  useState } from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from "react-router-dom"


function Notices() {
  const [inputs, setInputs] = useState({})
  const navigate=useNavigate()
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setInputs(values => ({...values, [name]: value}))
    }
    const handleSubmit = async(e) => {
        e.preventDefault()

        const formData = {title: inputs.title, link: inputs.link}
        const res = await axios.post('http://localhost/unibuddy/backend/api/notices.php', formData)
        console.log(inputs);
    
    }

    const redirectTo=()=>{
    //change <anyId>  
      navigate('/admin/Controls/notices/anyID/edit')
    }
  return (
    <div className='bg-blue-400 mt-7  w-full h-[100vh]'>
      <form action="" onSubmit={handleSubmit}>
            <label htmlFor="title">Notice Title</label>
            <input type="text" name="title" onChange={handleChange}/>
            <br />

            <label htmlFor="link">Notice Link</label>
            <input type="url" name="link" onChange={handleChange}/>
            <br />

            <button >Save</button>
        </form>
        <button className="btn btn-blue" onClick={redirectTo}>redirect</button>
      
    </div>
  )
}

export default Notices
