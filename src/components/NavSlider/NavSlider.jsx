import React from 'react';
import ggsipuLogo from '../../assets/ggsipu-logo.png';
import { Link } from 'react-router-dom';

export default function NavSlider({isAdmin}) {
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
          <li><Link to='/users/Notices' > Notices </Link></li>
          <li> <Link to='/users/Results' > Results </Link></li>
          <li><Link to='/users/Resources' > Resources </Link></li>
          <li><Link to='/users/TimeTable' > TimeTable </Link></li>
          {isAdmin &&  <li><Link to='/admin/controls' > Entire controls </Link></li> }
        </ul>
      </div>
    </div>
  );
}
