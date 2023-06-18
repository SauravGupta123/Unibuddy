import {useState, useEffect} from 'react';

export default function Notices() {
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
  

  return (
    <div className="container w-full flex items-center justify-center">
    <div>
      <table className="border-collapse border">
        <thead>
          <tr>
            <th className="border border-black p-2">id</th>
            <th className="border border-black p-2">Notices</th>
            <th className="border border-black  p-2">Link</th>
          </tr>
        </thead>
        <tbody>
          {noticeData.map((item, index) => (
            <tr key={index}>
              <td className="border border-black  p-2">{index+1}</td>
              <td className="border border-black  p-2">{item.title}</td>
              <td className="border border-black  p-2">{item.link}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}
