import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({cartsData,setCartsData,coin,setCoin}) => {
    const proceedDataDeleteHandle=()=>{
        setCartsData([])
        toast.success('Proceed Successful')
    }
    return (
        <div className='p-10 bg-[#F2F2F2] space-y-4'>
            {
                cartsData.length === 0 ? <div className='text-center'>
<h1 className='text-2xl font-bold text-[#101727] mb-8'>“Nothing bought”</h1>
<h1 className='text-[#627382] font-medium text-[16px]'>You haven’t bought any <span className='text-xl text-black font-medium'>premium digital tools</span> yet.
</h1>
                </div>
                :
<div>
                  <h1 className='text-2xl font-bold text-[#101727]'>Your Cart</h1>
            {
                cartsData.map(data=><div key={data.id} className='p-7 bg-[#F9FAFC] rounded-sm flex items-center justify-between '>
                    <div className='flex items-center gap-4'>
                        <img className='h-17 w-17 rounded-full p-3 bg-[#F2F2F2]' src={data.icon} alt="" />
                        <div>
                            <h1 className='font-semibold text-xl text-[#101727]'>{data.name}</h1>
                            <span className='text-[#627382] font-medium text-[16px]'>${data.price}</span>
                        </div>
                    </div>
                    <h1 className='text-[#FF3980] font-bold text-[16px]'>Remove</h1>
                </div>)
            }

            <div className='flex items-center justify-between my-6'>
                <h1 className='text-[#627382] text-[16px]'>Total:</h1>
                 <h1 className='text-2xl font-bold text-[#101727]'>${coin}</h1>
            </div>
            <button onClick={proceedDataDeleteHandle} className='text-[16px] font-bold text-white w-full bg-[linear-gradient(90deg,rgba(100,7,240,1)_36%,rgba(156,39,219,1)_100%,rgba(186,48,217,1)_93%)] py-2 rounded-full'>Proceed to Checkout</button>
            </div>
            }
            
          
            
        </div>
    );
};

export default Cart;