import React from 'react';
import FooterTwo from './FooterTwo';

const Footer = () => {
    return (
        <div className=''>
            {/* footer */}
            <div className='bg-[linear-gradient(90deg,rgba(100,7,240,1)_36%,rgba(156,39,219,1)_100%,rgba(186,48,217,1)_93%)] mt-30 px-5'>
            <div className='max-w-[1200px] mx-auto'>
                <div className='text-center py-30'>
                    <h1 className='text-white text-[40px] font-extrabold mb-4'>Ready to Transform Your Workflow?</h1>
                    <p className='text-[#e4e9ee] mb-10 text-[16px]'>Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.</p>
                    <div className='flex items-center justify-center gap-4 mb-4'>
                        <button className='bg-white rounded-full py-2 px-3'>Explore Products</button>
                        <button className=' rounded-full btn btn-outline text-white hover:text-black'>View Pricing</button>
                    </div>
                    <p className='text-[16px] text-[#e4e9ee]'>14-day free trial • No credit card required • Cancel anytime</p>
                </div>

            </div>
            
        </div>
        <FooterTwo></FooterTwo>
        </div>
        
    );
};

export default Footer;