import React from 'react';
import { LiaCheckSolid } from 'react-icons/lia';

const SimpleTransparents = () => {
    return (
        <div id='pricing' className='max-w-300 mx-auto md:mt-30'>
            <div className='text-center mb-10'>
                <h1 className='text-5xl text-[#101727] font-extrabold'>Simple, Transparent Pricing</h1>
                <p className='text-[#627382] text-[16px] mb-10 mt-4'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            {/* main cart container */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                {/* cart-1 */}
            <div className="card hover:scale-105 transition-all bg-base-100 shadow-sm ">
  <div className="card-body relative h-full w-full">
   
    <div className="">
      <h2 className="text-2xl text-[#101727] font-bold">Starter</h2>
      <p className='text--[16px] text-[#627382] mt-2'>Perfect for getting started</p>
      <h1 className="text-xl my-6 text-[#627382]"><span className='text-4xl text-[#101727] font-bold'>$0</span>/month</h1>
    </div>
    <ul className=" flex flex-col gap-2 text-xs">
      <li className='flex items-center gap-2'>
        <LiaCheckSolid className='text-[#30B868]'size={20}/>
        <span className='text-[#627382] text-[16px] font-medium'>High-resolution image generation</span>
      </li>
      <li className='flex items-center gap-2'>
        <LiaCheckSolid className='text-[#30B868]'size={20}/>
        <span className='text-[#627382] text-[16px] font-medium'>Basic templates</span>
      </li>
      <li className='flex items-center gap-2'>
        <LiaCheckSolid className='text-[#30B868]'size={20}/>
        <span className='text-[#627382] text-[16px] font-medium'>Community support</span>
      </li>
      <li className='flex items-center gap-2'>
        <LiaCheckSolid className='text-[#30B868]'size={20}/>
        <span className='text-[#627382] text-[16px] font-medium'>1 project per month</span>
      </li>
     
    </ul>
    <div className="mt-10 ">
      <button className="btn bg-[linear-gradient(90deg,rgba(100,7,240,1)_36%,rgba(156,39,219,1)_100%,rgba(186,48,217,1)_93%)]  text-[16px] rounded-full w-full text-white">Get Started Free</button>
    </div>
  </div>
</div>
            {/* cart-2 */}
            <div className="card hover:scale-105 transition-all bg-[linear-gradient(90deg,rgba(143,16,222,1)_11%,rgba(135,38,171,1)_77%,rgba(168,25,144,1)_97%)] shadow-sm">
  <div className="card-body">
   <div className='bg-amber-100 rounded-full flex items-center py-2 w-30 justify-center mx-auto -mt-12'>
    <h1 className='font-medium text-[14px] text-[#BB4D00]'>Most Popular</h1>
   </div>
    <div className="">
      <h2 className="text-2xl text-[#ffffff] font-bold">Pro</h2>
      <p className='text-[16px] text-[#ffffff] mt-2'>Best for professionals</p>
      <h1 className="text-xl my-6 text-[#ffffff]"><span className='text-4xl  font-bold'>$29</span>/month</h1>
    </div>
    <ul className=" flex flex-col gap-2 text-xs">
      <li className='flex items-center gap-2'>
        <LiaCheckSolid className='text-[#ffffff] stroke-3 ' size={20}/>
        <span className='text-[#ffffff] text-[16px] font-medium'>Access to all premium tools</span>
      </li>
      <li className='flex items-center gap-2'>
        <LiaCheckSolid className='text-[#ffffff] stroke-3' size={20}/>
        <span className='text-[#ffffff] text-[16px] font-medium'>Unlimited templates</span>
      </li>
      <li className='flex items-center gap-2'>
        <LiaCheckSolid className='text-[#ffffff] stroke-3'size={20}/>
        <span className='text-[#ffffff] text-[16px] font-medium'>Priority support</span>
      </li>
      <li className='flex items-center gap-2'>
        <LiaCheckSolid className='text-[#ffffff] stroke-3'size={20}/>
        <span className='text-[#ffffff] text-[16px] font-medium'>Unlimited projects</span>
      </li>
      <li className='flex items-center gap-2'>
        <LiaCheckSolid className='text-[#ffffff] stroke-3'size={20}/>
        <span className='text-[#ffffff] text-[16px] font-medium'>Unlimited projects</span>
      </li>
      <li className='flex items-center gap-2'>
        <LiaCheckSolid className='text-[#ffffff] stroke-3'size={20}/>
        <span className='text-[#ffffff] text-[16px] font-medium'>Cloud sync</span>
      </li>
      <li className='flex items-center gap-2'>
        <LiaCheckSolid className='text-[#ffffff] stroke-3'size={20}/>
        <span className='text-[#ffffff] text-[16px] font-medium'>Advanced analytics</span>
      </li>
     
    </ul>
    <div className="mt-6">
      <button className="btn  bg-white w-full rounded-full py-2">Start Pro Trial</button>
    </div>
  </div>
</div>
   {/* cart-3 */}
            <div className="card hover:scale-105 transition-all bg-base-100 shadow-md">
  <div className="card-body">
   
    <div className="">
      <h2 className="text-2xl text-[#101727] font-bold">Enterprise</h2>
      <p className='text--[16px] text-[#627382] mt-2'>For teams and businesses</p>
      <h1 className="text-xl my-6 text-[#627382]"><span className='text-4xl text-[#101727] font-bold'>$99</span>/month</h1>
    </div>
    <ul className=" flex flex-col gap-2 text-xs">
      <li className='flex items-center gap-2'>
        <LiaCheckSolid className='text-[#30B868]'size={20}/>
        <span className='text-[#627382] text-[16px] font-medium'>Everything in Pro</span>
      </li>
      <li className='flex items-center gap-2'>
        <LiaCheckSolid className='text-[#30B868]'size={20}/>
        <span className='text-[#627382] text-[16px] font-medium'>Team collaboration</span>
      </li>
      <li className='flex items-center gap-2'>
        <LiaCheckSolid className='text-[#30B868]'size={20}/>
        <span className='text-[#627382] text-[16px] font-medium'>Custom integrations</span>
      </li>
      <li className='flex items-center gap-2'>
        <LiaCheckSolid className='text-[#30B868]'size={20}/>
        <span className='text-[#627382] text-[16px] font-medium'>Dedicated support</span>
      </li>
      <li className='flex items-center gap-2'>
        <LiaCheckSolid className='text-[#30B868]'size={20}/>
        <span className='text-[#627382] text-[16px] font-medium'>SLA guarantee</span>
      </li>
      <li className='flex items-center gap-2'>
        <LiaCheckSolid className='text-[#30B868]'size={20}/>
        <span className='text-[#627382] text-[16px] font-medium'>Custom branding</span>
      </li>
     
    </ul>
    <div className="mt-10 ">
      <button className="btn bg-[linear-gradient(90deg,rgba(100,7,240,1)_36%,rgba(156,39,219,1)_100%,rgba(186,48,217,1)_93%)]  text-[16px] rounded-full w-full text-white">Contact Sales</button>
    </div>
  </div>
</div>
            </div>
            
        </div>
    );
};

export default SimpleTransparents;