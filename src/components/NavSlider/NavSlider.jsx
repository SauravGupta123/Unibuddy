import React from 'react';
import ggsipuLogo from '../../assets/ggsipu-logo.png';

export default function NavSlider() {
  return (
    <div className="flex flex-col h-screen w-56 bg-[#29292a] text-white items-center">
      <div className="logo h-44">
        <img src={ggsipuLogo} className="h-full" alt="" />
      </div>

      <div className="heading text-3xl">Menu</div>

      <ul className='flex flex-col space-y-4 mt-8 text-xl'>
        <li>
          dashboard
      
        </li>

        <li>Notices</li>
        <li>Examinations
        <ul className="relative group text-lg">
            <li>Results</li>
            <li>Admit Card</li>
          
          </ul>
        </li>
        <li>TimeTable</li>
        <li>Resources</li>
      </ul>
    </div>
  );
}
