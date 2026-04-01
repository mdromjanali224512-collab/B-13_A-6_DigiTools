import React from 'react';
import { LiaCheckSolid } from 'react-icons/lia';
import { toast } from 'react-toastify';

const SingleDigiTools = ({data,cartsData,setCartsData,coin,setCoin}) => {
    const {name,description,price,period,tagType,features,icon}=data
    
    const checkData=cartsData.some(filtering=>filtering.name === name)
    const buyDataHandle=()=>{
        const newCoin=coin+price;

        
        if(checkData){
          alert("This tools purchased")
          return;
        }
        setCoin(newCoin)
setCartsData([...cartsData,data])
        
        toast.success('Buy SuccessFul')
       
    }
    return (
         <div className="card bg-base-100 hover:scale-105 transition-all shadow-md">
          <div className="card-body">
           
           <div className='text-right'>
 <h1 className={`font-medium text-[14px] btn rounded-full ${tagType==='popular' && 'btn-dash btn-secondary' || tagType==='new' && 'btn-dash btn-primary' || tagType==='best-seller' && 'btn-dash btn-success'}`}>{tagType}</h1>
           </div>
            <div className="">
              <img className='h-15' src={icon} alt="" />
              <h1 className='text-[#101727] font-bold text-2xl my-4'>{name}</h1>
              <p className='text-[16px] text-[#627382] mt-2'>{description}</p>
              <h1 className="text-xl my-6 text-[#627382]"><span className='text-4xl text-[#101727] font-bold'>${price}</span>/{period}</h1>
            </div>
            <ul className=" flex flex-col gap-2 text-xs">
            {
                features.map((feature,index)=><div key={index}>
                    <li className='flex items-center gap-2'>
                <LiaCheckSolid className='text-[#30B868]'size={20}/>
                <span className='text-[#627382] text-[16px] font-medium'>{feature}</span>
              </li>
                </div>)
            }
            </ul>
            {/* buy handle */}
            <div className="mt-5">
              {
                !checkData ?
                   <button onClick={buyDataHandle} className={`btn bg-[linear-gradient(90deg,rgba(100,7,240,1)_36%,rgba(156,39,219,1)_100%,rgba(186,48,217,1)_93%)]  text-[16px] rounded-full w-full text-white `}>Buy Now</button>
                   : 
                   <button onClick={buyDataHandle} className={`btn text-[16px] rounded-full w-full text-white bg-[linear-gradient(90deg,rgba(131,58,180,1)_0%,rgba(253,29,29,1)_50%,rgba(252,176,69,1)_100%)]`}>
                    <LiaCheckSolid size={20} className='stroke-2 text-green-500'/>
                    Purchased</button>                
              }
             
            </div>
          </div>
        </div>
    );
};

export default SingleDigiTools;
