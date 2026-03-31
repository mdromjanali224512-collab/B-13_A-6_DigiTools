import React from 'react';

const Cart = ({cartsData,setCartsData}) => {
    
    return (
        <div className='p-10 bg-[#F2F2F2] space-y-4'>
            <h1 className='text-2xl font-bold text-[#101727]'>Your Cart</h1>
            {
                cartsData.map(data=><div className='p-7 bg-[#F9FAFC] rounded-sm flex items-center justify-between '>
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
        </div>
    );
};

export default Cart;