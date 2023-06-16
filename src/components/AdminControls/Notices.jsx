import {  useState } from 'react'
import axios from 'axios'


function Notices() {
  const [inputs, setInputs] = useState({})

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setInputs(values => ({...values, [name]: value}))
    }
    const handleSubmit = async(e) => {
        e.preventDefault()

        const formData = {title: inputs.title, link: inputs.link}
        const res = await axios.post('http://localhost/unibuddy/api/notices.php', formData)
        console.log(inputs);
    
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
  
      
    </div>
  )
}

export default Notices
