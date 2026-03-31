import React from 'react';
import baner from '../../../assets/banner.png'
import play from '../../../assets/play.png'
import group from '../../../assets/group.png'
const HeroSection = () => {
    return (
        <div className="hero bg-base-200 px-5 py-20">
  <div className="hero-content flex-col lg:flex-row-reverse gap-20 md:gap-0">
 <div className='flex-1'>
       <img
      src={baner}
      className="md:max-w-full rounded-lg shadow-2xl"
    />
 </div>
    <div className='flex-1 '>
        <div className='w-75 flex items-center gap-2  px-3 py-2 bg-gray-300 rounded-full  mb-6'>
            <img src={group} alt="" /> 
            <h1 className=' text-[16px] bg-[linear-gradient(0deg,rgba(98,3,161,1)_44%,rgba(253,29,29,1)_100%,rgba(255,157,20,1)_72%)] bg-clip-text text-transparent font-medium'>
            New: AI-Powered Tools Available
        </h1>
        </div>
      <h1 className="text-5xl font-extrabold text-[#101727] leading-20">Supercharge Your Digital Workflow</h1>
      <p className="py-6 text-[#627382] text-[18px]">
        Access premium AI tools, design assets, templates, and productivity <br />
software—all in one place. Start creating faster today. <br />

Explore Products
      </p>
      <div className='flex gap-4 flex-wrap items-center'>
        <button className="text-[16px] text-white btn bg-[linear-gradient(90deg,rgba(131,58,180,1)_43%,rgba(253,29,29,1)_100%,rgba(255,157,20,1)_96%)] rounded-full">Explore Products</button>
        <button className="btn btn-primary btn-outline rounded-full flex items-center">
            <img src={play} alt="" />
            Watch Demo</button>
      </div>
      
    </div>
  </div>
</div>
    );
};

export default HeroSection;