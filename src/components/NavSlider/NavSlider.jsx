import React from 'react';
import ggsipuLogo from '../../assets/ggsipu-logo.png';
import { Link } from 'react-router-dom';

export default function NavSlider() {
  return (
    <div className="flex flex-col h-screen w-56 bg-[#29292a] text-white items-center">

      {/* div1: logo */}
      <div className="logo h-44">
        <img src={ggsipuLogo} className="h-full" alt="" />
      </div>
      {/* div2:heading text */}

      <div className="heading text-3xl">Menu</div>

      {/* div3:links */}
      <div>
        <ul className='flex flex-col space-y-4 mt-8 text-xl'>
          <li> <Link to='/' > Dashboard </Link> </li>
          <li><Link to='/Notices' > Notices </Link></li>
          <li>Examinations
            <ul className="relative group text-lg">
              <li> <Link to='/Results' > Results </Link></li>
              <li>Admit Card</li>
            </ul>
          </li>
          <li><Link to='/Resources' > Resources </Link></li>
          <li><Link to='/TimeTable' > TimeTable </Link></li>
        </ul>
      </div>
    </div>
  );
}
