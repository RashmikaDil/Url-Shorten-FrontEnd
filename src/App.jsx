
import { useState } from 'react';
import './App.css'
import UrlShorten from './UrlShorten'
import Track from './Track';
import Footer from './Footer';
import logo from './logo.png';



function App() {
 const [screen,setScreen] = useState('Short');

const setSceenComponent = (screen) => {
  setScreen(screen);
}

  return (
    <>


    <div className='bg-gray-900 h-screen overflow-scroll'>
<div className='md:h-screen h-auto bg-gray-900 text-white   pb-20 flex-col flex items-center justify-center'>  <img src={logo} alt="Logo" className='w-50 h-50 ' />
    <div className='w-[90% ] mb-0   md:w-[50%] lg:w-[30%] overflow-hidden bg-gray-800 flex justify-between  items-center  rounded-lg shadow-lg mt-0'>
  
  <div onClick={() => setSceenComponent('Short')} className={`w-1/2 h-full p-4 flex justify-center text-white items-center cursor-pointer  ${screen === 'Short' ? 'bg-blue-500': 'bg-gray-800'}`}>Short</div>
  <div onClick={() => setSceenComponent('Track')} className={`w-1/2 h-full p-4 flex justify-center text-white items-center cursor-pointer ${screen === 'Track' ? 'bg-blue-500': 'bg-gray-800'}`}>Track</div>
</div>
  <div className=' m-0 p-0 flex mt-10 flex-col  items-center bg-gray-900'>
      



{screen === 'Short' ? 
      <UrlShorten/> : <Track/> }
      
     </div>

</  div>
   
     <Footer/>
   </div>
    </>
  )
}

export default App
