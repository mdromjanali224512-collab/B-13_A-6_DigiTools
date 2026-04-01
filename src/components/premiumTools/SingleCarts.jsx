import React from 'react';
import { toast } from 'react-toastify';


const SingleCarts = ({datas,setCartsData,cartsData,coin,setCoin}) => {
     
    const removeHandle=()=>{
const filterData=cartsData?.filter(data=>data.name !== datas.name)
setCartsData(filterData)
const newDecreseCoin=coin-datas.price
setCoin(newDecreseCoin)
toast.error('Remove Tools !!')
    }
    return (       
                           <div className='md:p-7 px-2 py-5 bg-[#F9FAFC] rounded-sm flex items-center justify-between '>
                                <div className='flex items-center gap-4'>
                                    <img className='h-17 w-17 rounded-full p-3 bg-[#F2F2F2]' src={datas.icon} alt="" />
                                    <div>
                                        <h1 className='font-semibold text-xl text-[#101727]'>{datas.name}</h1>
                                        <span className='text-[#627382] font-medium text-[16px]'>${datas.price}</span>
                                    </div>
                                </div>
                                <button onClick={removeHandle} className='text-[#FF3980] font-bold text-[16px]'>Remove</button>
                            </div>
                  
    );
};

export default SingleCarts;