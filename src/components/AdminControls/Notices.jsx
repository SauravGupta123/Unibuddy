import {  useState, useEffect } from 'react'
import axios from 'axios'
import { Navigate, useNavigate, Link } from "react-router-dom"


function Notices() {
  const [inputs, setInputs] = useState({})

  const [noticeData, setNoticeData] = useState([])
  useEffect(() => {
    const getNoticeData = async () => {
      const reqData = await fetch('http://localhost/unibuddy/backend/api/notices.php')
      const resData = await reqData.json()
      console.log(resData)
      setNoticeData(resData)
    }
    getNoticeData()
  }, [])
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
    <div className='mt-7  w-full h-[100vh]'>
      <form action="" onSubmit={handleSubmit}>
            <label htmlFor="title">Notice Title</label>
            <input type="text" name="title" onChange={handleChange}/>
            <br />

            <label htmlFor="link">Notice Link</label>
            <input type="url" name="link" onChange={handleChange}/>
            <br />

            <button >Save</button>
        </form>

        <div className="container w-full flex items-center justify-center">
    <div>
      <table className="border-collapse border">
        <thead>
          <tr>
            <th className="border border-black p-2">id</th>
            <th className="border border-black p-2">Notices</th>
            <th className="border border-black  p-2">Link</th>
            <th className="border border-black  p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {noticeData.map((item, index) => (
            <tr key={index}>
              <td className="border border-black  p-2">{index+1}</td>
              <td className="border border-black  p-2">{item.title}</td>
              <td className="border border-black  p-2">{item.link}</td>
              <td className="border border-black  p-2">
                  <Link className='text-green-700' to={"/admin/Controls/notices/"+ item.id +"/edit"}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </div>
  )
}

export default Notices
