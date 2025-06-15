
import { useState } from 'react';
import './App.css'
import UrlShorten from './UrlShorten'
import Track from './Track';

function App() {
 const [screen,setScreen] = useState('Short');

const setSceenComponent = (screen) => {
  setScreen(screen);
}

  return (
    <>
   
     <div className='w-full h-screen m-0 p-0 flex items-center    flex-col justify-center bg-gray-900'>
<div className='w-[90%] fixed bottom-0 md:w-[50%] lg:w-[30%] overflow-hidden bg-gray-800 flex justify-between items-center  rounded-lg shadow-lg mb-10'>
  <div onClick={() => setSceenComponent('Short')} className={`w-1/2 h-full p-4 flex justify-center text-white items-center cursor-pointer ${screen === 'Short' ? 'bg-blue-500': 'bg-gray-800'}`}>URL Shortener</div>
  <div onClick={() => setSceenComponent('Track')} className={`w-1/2 h-full p-4 flex justify-center text-white items-center cursor-pointer ${screen === 'Track' ? 'bg-blue-500': 'bg-gray-800'}`}>Track URL</div>
</div>


{screen === 'Short' ? 
      <UrlShorten/> : <Track/> }
     </div>
    </>
  )
}

export default App
