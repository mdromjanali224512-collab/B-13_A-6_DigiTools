

import React from 'react';
import CountUp from 'react-countup';


const CountTools = () => {
    return (
      <div className='bg-[linear-gradient(90deg,rgba(2,0,36,1)_4%,rgba(9,9,121,1)_53%,rgba(2,171,228,1)_100%,rgba(84,167,184,1)_100%)]'>
          <div className='max-w-[1200px] mx-auto p-10 flex items-center gap-10 flex-wrap justify-around'>
       <div className=' md:border-r-4 border-gray-300 pb-10 md:pr-20'>
        <h1 className='text-6xl text-[#ffffff] font-extrabold'>50k+</h1>
        <p className='font-medium text-2xl mt-3 text-[#ffffff]'>Active Users</p>
       </div>
       <div className=' md:border-r-4 border-gray-300 pb-10 md:pr-20'>
        <h1 className='text-6xl text-[#ffffff] font-extrabold'>200+</h1>
        <p className='font-medium text-2xl mt-3 text-[#ffffff]'>Premium Tools</p>
       </div>
       <div className=' md:border-r-4 border-gray-300 pb-10 md:pr-20'>
        <h1 className='text-6xl text-[#ffffff] font-extrabold'>4.9</h1>
        <p className='font-medium text-2xl mt-3 text-[#ffffff]'>Rating</p>
       </div>
         
        </div>
      </div>
    );
};

export default CountTools;