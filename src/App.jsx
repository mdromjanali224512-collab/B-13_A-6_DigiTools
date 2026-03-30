
import './App.css'
import CountTools from './components/baner/CountTools'
import HeroSection from './components/baner/HeroSection'
import Footer from './components/footer/Footer'
import GetStarted from './components/getStarted/GetStarted'
import NavBar from './components/navbar/NavBar'
import SimpleTransparents from './components/transparents/SimpleTransparents'

function App() {


  return (
    <div  className=''>
    <NavBar></NavBar>
    <HeroSection></HeroSection>
   <CountTools></CountTools>
   <GetStarted></GetStarted>
   <SimpleTransparents></SimpleTransparents>
   <Footer></Footer>
 </div>

  )
}

export default App
