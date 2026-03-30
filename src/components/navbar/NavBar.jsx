import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';
import { MdMenu } from 'react-icons/md';

const NavBar = () => {
   const link= <div className='md:flex text-[16px] text-[#101727] font-semibold'>
   <li><a href="">Products</a></li>
   <li><a href="">Features</a></li>
   <li><a href="">Pricing</a></li>
   <li><a href="">Testimonials</a></li>
   <li><a href="">FAQ</a></li>
    </div>
    return (
      <div className="navbar md:px-10 max-w-[1600px] mx-auto bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <MdMenu size={30}/>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {link}  
      </ul>
    </div>
    <h1 className='bg-[linear-gradient(90deg,rgba(131,58,180,1)_25%,rgba(253,29,29,1)_51%,rgba(255,157,20,1)_88%)] bg-clip-text text-transparent text-4xl font-bold'>DigiTools</h1>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-2">
      {link}
    </ul>
  </div>
  <div className="navbar-end gap-5">
    <CiShoppingCart size={30}/>
    <a className="text-[16px] font-semibold text-[#101727]">Login</a>
    <button className='bg-gradient-to-r from-purple-600 via-red-500 to-orange-400 text-[16px] rounded-full px-3 py-2 text-white'>Get Started</button>
  </div>
</div>
    );
};

export default NavBar;