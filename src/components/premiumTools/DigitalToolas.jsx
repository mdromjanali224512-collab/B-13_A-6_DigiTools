import React, { use, useState } from 'react';
import SingleDigiTools from './SingleDigiTools';
import Cart from './Cart';

const DigitalToolas = ({cartData}) => {
   
    const datas=use(cartData)

 const [active,setActive]=useState(true)
    const [cartsData,setCartsData]=useState([])

    const showAndHideHandle=()=>{
        setActive(!active)
    }
   
    
    return (
        <div className='mt-40 max-w-[1200px] mx-auto px-5'>
            <div className='text-center'>
                <h1 className='text-[#101727] font-extrabold text-5xl'>Premium Digital Tools</h1>
                <p className='text-[16px] text-[#627382] my-4 '>Choose from our curated collection of premium digital products designedto boost your productivity and creativity.</p>
                <div className='flex items-center bg-[radial-gradient(circle,rgba(238,174,202,1)_0%,rgba(148,187,233,1)_100%)] rounded-full w-39 mx-auto mb-10'>
                    <button onClick={showAndHideHandle} className={`px-3 py-2 ${active && 'bg-[linear-gradient(90deg,rgba(100,7,240,1)_36%,rgba(156,39,219,1)_100%,rgba(186,48,217,1)_93%)] text-white'}  rounded-full text-[16px] font-bold `}>Products</button>
                    <button onClick={showAndHideHandle} className={`px-3 py-2 rounded-full text-[16px] font-bold  ${!active && 'bg-[linear-gradient(90deg,rgba(100,7,240,1)_36%,rgba(156,39,219,1)_100%,rgba(186,48,217,1)_93%)] text-white '}`}>Cart()</button>
                </div>
            </div>
            {
                active ? 
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {
                datas.map(data=><SingleDigiTools cartsData={cartsData} setCartsData={setCartsData} key={data.id} data={data}></SingleDigiTools>)
            }  
            </div>
                :<Cart cartsData={cartsData} setCartsData={setCartsData}></Cart>
                
            }
            
            
        </div>
    );
};

export default DigitalToolas;