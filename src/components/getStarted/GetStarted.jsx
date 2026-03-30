import React from 'react';
import user from '../../../assets/user.png'
import packag from '../../../assets/package.png'
import rocket from '../../../assets/rocket.png'
const GetStarted = () => {
    return (
        <div className='bg-[#F9FAFC] py-30'>
             <div className='max-w-[1200px] mx-auto '>
            <div className='space-y-5 text-center'>
                 <h1 className='text-[#101727] text-5xl font-extrabold'>Get Started in 3 Steps</h1>
                 <p className='text-xl text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            {/* main */}
            <div className='my-10 grid grid-cols-1 md:grid-cols-3 gap-8'>
                {/* sub1 */}
                <div className='flex  justify-center items-center'>
                    <div className='text-center space-y-4 p-6 rounded-md bg-white shadow-md py-20 relative'>
                        {/* count */}
                        <div className='h-10 w-10 flex items-center justify-center bg-[linear-gradient(27deg,rgba(63,94,251,1)_14%,rgba(240,36,77,1)_85%)] rounded-full absolute right-4 top-4'>
                            <p className='text-[14px] font-bold text-white'>01</p>
                        </div>
                        {/* img */}
                        <div className='mx-auto h-30 w-30 bg-[#c7a3df] rounded-full flex items-center justify-center'>
                            <img src={user} alt="" /> 
                        </div>
                   {/* text */}
                    <h1 className='text-2xl font-bold text-[#101727]'>Create Account </h1>
                    <p className='text-[16px] text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
                </div>
                {/* sub2 */}
                <div className='flex  justify-center items-center'>
                    <div className='text-center space-y-4 p-6 rounded-md bg-white shadow-md py-20 relative'>
                        {/* count */}
                        <div className='h-10 w-10 flex items-center justify-center bg-[linear-gradient(27deg,rgba(63,94,251,1)_14%,rgba(240,36,77,1)_85%)] rounded-full absolute right-4 top-4'>
                            <p className='text-[14px] font-bold text-white'>02</p>
                        </div>
                        {/* img */}
                        <div className='mx-auto h-30 w-30 bg-[#c7a3df] rounded-full flex items-center justify-center'>
                            <img src={packag} alt="" /> 
                        </div>
                   {/* text */}
                    <h1 className='text-2xl font-bold text-[#101727]'>Choose Products</h1>
                    <p className='text-[16px] text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>
                </div>
                </div>
                {/* sub3 */}
                <div className='flex  justify-center items-center'>
                    <div className='text-center space-y-4 p-6 rounded-md bg-white shadow-md py-20 relative'>
                        {/* count */}
                        <div className='h-10 w-10 flex items-center justify-center bg-[linear-gradient(27deg,rgba(63,94,251,1)_14%,rgba(240,36,77,1)_85%)] rounded-full absolute right-4 top-4'>
                            <p className='text-[14px] font-bold text-white'>03</p>
                        </div>
                        {/* img */}
                        <div className='mx-auto h-30 w-30 bg-[#c7a3df] rounded-full flex items-center justify-center'>
                            <img src={rocket} alt="" /> 
                        </div>
                   {/* text */}
                    <h1 className='text-2xl font-bold text-[#101727]'>Start Creating</h1>
                    <p className='text-[16px] text-[#627382]'>Download and start using your premium tools immediately.</p>
                </div>
                </div>
                
            </div>
           
        </div>
        </div>
       
    );
};

export default GetStarted;