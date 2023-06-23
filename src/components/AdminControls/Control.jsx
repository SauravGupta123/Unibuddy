import React, { useState } from 'react';
import Notices from './Notices';
import AddResources from './AddResources';

function Control() {
  const [showComponent, setShowComponent] = useState(0);

  const handleNoticeClick = () => {
    if(showComponent!==1){

    setShowComponent(1)}
    else{
      setShowComponent(0)
    }

  };

  
  const handleResourceClick = () => {
    if(showComponent!==2){

    setShowComponent(2)}
    else{
      setShowComponent(0)
    }

  };

  const handleTimeTableClick = () => {
    if(showComponent!==3){

    setShowComponent(3)}
    else{
      setShowComponent(0)
    }

  };



  return (
    <div className='bg-blue-100 space-x-6 w-full p-8'>

      <button onClick={handleNoticeClick} className='btn btn-blue'>Add notices</button>

      <button onClick={handleResourceClick} className='btn btn-blue'>Add Resources</button>
      <button  onClick={handleTimeTableClick} className='btn btn-blue'>Change timeTable</button>

      {showComponent==1 && <Notices />}
      {showComponent==2 && <AddResources />}
      {/* {showComponent==2 && <EditTimeTable />} */} {/*-->todo*/}
      {/* 1=notices,2=Resources,3=timeTable    */}
    </div>
  );
}

export default Control;
