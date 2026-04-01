import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';
import { MdMenu } from 'react-icons/md';

const NavBar = ({cartsData}) => {
  const featuresHandle=()=>{
    alert("Nothing has been added yet!!")
  }
   const link= <div className='lg:flex text-[16px] text-[#101727] font-semibold'>
   <li><a href="#cart">Products</a></li>
   <li><a onClick={featuresHandle} href="">Features</a></li>
   <li><a href="#pricing">Pricing</a></li>
   <li><a onClick={featuresHandle} href="">Testimonials</a></li>
   <li><a onClick={featuresHandle} href="">FAQ</a></li>
    </div>
    return (
      <div className="navbar md:px-10 max-w-400 mx-auto bg-base-100 shadow-sm">
  <div className="navbar-start -ml-3 md:ml-0">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <MdMenu size={30}/>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {link}  
              <a href="#get" className='bg-gradient-to-r from-purple-600 via-red-500 to-orange-400 text-[16px] rounded-full px-3 py-2 text-white text-center'>
                Get Started
              </a>
               
      </ul>
    </div>
    <h1 className='bg-[linear-gradient(90deg,rgba(131,58,180,1)_25%,rgba(253,29,29,1)_51%,rgba(255,157,20,1)_88%)] bg-clip-text text-transparent text-4xl font-bold -ml-3 md:ml-0'>DigiTools</h1>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-2">
      {link}
    </ul>
  </div>
  <div className="navbar-end  md:gap-5">
    <div className='relative'>
      <a href="#cart">
        <CiShoppingCart size={35} className='relative'/>
      </a>
      
      {
        cartsData.length>=1 &&<span className='text-red-500 font-bold absolute right-0 -top-3'>{cartsData.length}</span>
      }
      
    </div>
    
    <a onClick={featuresHandle} className="text-[16px] btn font-semibold text-[#101727]">Login</a>
    <a href="#get">
      <button className='bg-gradient-to-r from-purple-600 hidden lg:block via-red-500 to-orange-400 text-[16px] rounded-full py-2 text-white'>Get Started</button>
    </a>
    
  </div>
</div>
    );
};

export default NavBar;