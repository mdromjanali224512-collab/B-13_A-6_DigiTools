
import { Suspense, useState } from 'react'
import './App.css'
import CountTools from './components/baner/CountTools'
import HeroSection from './components/baner/HeroSection'
import Footer from './components/footer/Footer'
import GetStarted from './components/getStarted/GetStarted'
import NavBar from './components/navbar/NavBar'
import DigitalToolas from './components/premiumTools/DigitalToolas'
import SimpleTransparents from './components/transparents/SimpleTransparents'
import { ToastContainer } from 'react-toastify'

const fethData=async ()=>{

  const data=await fetch('/cartData.json')
  return data.json();
}
const cartData=fethData()
function App() {
     const [cartsData,setCartsData]=useState([])



  return (
    <div  className='manrope mx-2'>
    <NavBar
    cartsData={cartsData}
    ></NavBar>
    <HeroSection></HeroSection>
   <CountTools></CountTools>
   <Suspense fallback={<h1>loading...</h1>}>
       <DigitalToolas
        cartsData={cartsData}
        cartData={cartData}
       setCartsData={setCartsData}

        ></DigitalToolas>
   </Suspense>
   <GetStarted></GetStarted>
   <SimpleTransparents></SimpleTransparents>
   <Footer></Footer>
   <ToastContainer />
 </div>

  )
}

export default App
