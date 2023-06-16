import React, { useState } from 'react';
import Notices from './Notices';

function Control() {
  const [showNotices, setShowNotices] = useState(false);

  const handleClick = () => {
    if(showNotices){
      
    setShowNotices(false)}
    else{
      setShowNotices(true)
    }

  };

  return (
    <div className='bg-blue-100 space-x-6 w-full p-8'>
      <button onClick={handleClick} className='btn btn-blue'>
        Add notices
      </button>

      <button className='btn btn-blue'>Add Resources</button>
      <button className='btn btn-blue'>Change timeTable</button>

      {showNotices && <Notices />}
    </div>
  );
}

export default Control;
