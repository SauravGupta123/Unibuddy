import {  useState, useEffect } from 'react'
import axios from 'axios'
import { Navigate, useNavigate, Link, useParams } from "react-router-dom"


function EditNotices() {
  const [inputs, setInputs] = useState({})
  const {id} = useParams();
  console.log(id);
  
    const handleChange = (e) => {
        setInputs(values => ({...values, [e.target.name]: e.target.value}))
    }
    
    const handleSubmit = async(e) => {
        e.preventDefault()

        const formData = {id:id, title: inputs.title, link: inputs.link}
        const res = await axios.put('http://localhost/unibuddy/backend/api/notices.php', formData)
        console.log(inputs);
    
    }
    useEffect(() => {
      const noticeRowData = async () => {
        const getNoticeData = await fetch('http://localhost/unibuddy/backend/api/notices.php/'+id)
        const resNoticeData = await getNoticeData.json()
        console.log(resNoticeData)
        setInputs(resNoticeData)

      }
      noticeRowData()
    }, [id])

  return (
    <div className='mt-7  w-full h-[100vh]'>
      <form action="" onSubmit={handleSubmit}>
            <label htmlFor="title">Notice Title</label>
            <input type="text" name="title" onChange={handleChange} value={inputs.title}/>

            <label htmlFor="link">Notice Link</label>
            <input type="url" name="link" onChange={handleChange} value={inputs.link}/>

            <button >Update</button>
        </form>
      </div>
  )
}

export default EditNotices
