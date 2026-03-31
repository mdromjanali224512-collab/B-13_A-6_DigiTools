import React from 'react';
import { FaCamera, FaFacebook } from 'react-icons/fa';
import { FaX, FaXTwitter } from 'react-icons/fa6';

const FooterTwo = () => {
    return (
        <div className='bg-[#101727] '>
            <footer className="grid grid-cols-2 md:grid-cols-6 justify-between text-base-content py-30 p-5 max-w-[1200px] mx-auto">
                <div className='col-span-2'>
                    <h1 className='text-5xl font-semibold text-white mb-4'>DigiTools</h1>
                    <p className='text-[#A1A1AA] text-[16px]'>Premium digital tools for creators, professionals, and businesses. <br /> Work smarter with our suite of powerful tools.</p>
                </div>
                {/* products */}
                <nav>
    <h6 className="text-xl text-[#ffffff] font-semibold">Product</h6>
    <div className='text-[#A1A1AA] text-[16px] grid grid-cols-1 gap-4'>
       <a className="link link-hover">Features</a>
    <a className="link link-hover">Pricing</a>
    <a className="link link-hover">Templates</a>
    <a className="link link-hover">Integrations</a> 
    </div>
    
  </nav>
  {/* company */}
  <nav>
    <h6 className="text-xl text-[#ffffff] font-semibold">Company</h6>
    <div className='text-[#A1A1AA] text-[16px] grid grid-cols-1 gap-4'>
       <a className="link link-hover">About</a>
    <a className="link link-hover">Blog</a>
    <a className="link link-hover">Careers</a>
    <a className="link link-hover">Press</a> 
    </div>
    
  </nav>
  {/* resources */}
  <nav>
    <h6 className="text-xl text-[#ffffff] font-semibold">Resources</h6>
    <div className='text-[#A1A1AA] text-[16px] grid grid-cols-1 gap-4'>
       <a className="link link-hover">Documentation</a>
    <a className="link link-hover">Help Center</a>
    <a className="link link-hover">Community</a>
    <a className="link link-hover">Contact</a> 
    </div>
    
  </nav>
  {/* social */}
  <nav>
    <h6 className="text-xl font-medium text-[#ffffff] mb-4">Social Links</h6>
    <div className="flex flex-wrap gap-2">
      <a className='h-13 flex items-center justify-center w-13 rounded-full bg-white'>
       <FaCamera size={20}/>
      </a>
      <a className='h-13 flex items-center justify-center w-13 rounded-full bg-white'>
        <FaFacebook size={20}/>
      </a>
      <a className='h-13 flex items-center justify-center w-13 rounded-full bg-white'>
        <FaXTwitter size={20}/>
      </a>
    </div>
  </nav>
</footer>
<hr className='text-gray-600 mt-20'/>
<div className='flex justify-between text-[#FAFAFA] text-[16px] items-center py-8'>
  <h1 className=''>© 2026 Digitools. All rights reserved.</h1>
  <div className='flex justify-end items-center gap-10'>
    <li>Privacy Policy</li>
    <li>Terms of Service</li>
    <li>Cookies</li>
  </div>
</div>
        </div>
    );
};

export default FooterTwo;