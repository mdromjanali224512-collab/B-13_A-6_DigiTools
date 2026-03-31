
import { Suspense } from 'react'
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
function App() {
const cartData=fethData()


  return (
    <div  className=''>
    <NavBar></NavBar>
    <HeroSection></HeroSection>
   <CountTools></CountTools>
   <Suspense>
       <DigitalToolas cartData={cartData}></DigitalToolas>
   </Suspense>
   <GetStarted></GetStarted>
   <SimpleTransparents></SimpleTransparents>
   <Footer></Footer>
   <ToastContainer />
 </div>

  )
}

export default App
