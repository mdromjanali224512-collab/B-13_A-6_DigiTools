import React from 'react';

import SingleCarts from './SingleCarts';
import { toast } from 'react-toastify';

const Cart = ({ cartsData, setCartsData, coin ,setCoin}) => {
    
   const proceedDataDeleteHandle = () => {
        setCartsData([])
console.log('aida first',cartsData);
        toast.success('Proceed Successful')
        setCoin(0)
    }
    return (
        <div className='md:p-10 p-4 bg-[#F2F2F2]'>
            {
                
                    cartsData.length === 0 ? <div className='text-center'>
                    <h1 className='text-2xl font-bold text-[#101727] mb-8'>“Nothing bought”</h1>
                    <h1 className='text-[#627382] font-medium text-[16px]'>You haven’t bought any <span className='text-xl text-black font-medium'>premium digital tools</span> yet.
                    </h1>
                </div>
                    :
                    <div className='space-y-4'>
                        <h1 className='text-2xl font-bold text-[#101727]'>Your Cart</h1>
                       {
                        cartsData.map(datas=><SingleCarts
                        key={datas.id}
                    datas={datas} 
                    setCartsData={setCartsData}
                    coin={coin}
                    setCoin={setCoin}
                    cartsData={cartsData}
                    ></SingleCarts>)
                        
               
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