import { useState } from 'react'
import './App.css'
import axios from 'axios'


const currentUrl = window.location.origin;


const UrlShorten = () => {

const apiUrl = import.meta.env.VITE_API_URL;



    const [url, setLink] = useState('');
  const [error, setError] = useState(null);
 
 
  const [shortenedLink, setShortenedLink] = useState('');
  
  
 
  const handleShorten = () => {

  if (shortenedLink == '') {


    if (!url){
      console.error('Please enter url First!');
      setError('Please enter URL First!');
      return;
    }
    setError(null);
    axios.post(apiUrl, { url })
  .then((response) => {
    if (response.data) {
      const id = response.data.shortId;
      console.log('Response:', response.data);
      setShortenedLink(`${currentUrl}/${id}`);
      setLink(`${currentUrl}/${id}`);
      console.log('Shortened Link:', `${currentUrl}/${id}`);
      setError(`Shortened Link: ${`${currentUrl}/${id}`}`);
    } else {
      setError('Server Error: Unable to shorten link');
    }
  })
  .catch((error) => {
    console.error('Error shortening link:', error);
    setError('Error shortening link');
  });




  }else {
    navigator.clipboard.writeText(shortenedLink)
      .then(() => {
        console.log('Shortened link copied to clipboard:', shortenedLink);
        setError('Shortened link copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy shortened link:', err);
        setError('Failed to copy shortened link');
      });
      setShortenedLink('');
      setLink('');
  }
  setError(null);

  };

















  return (
    <>
    
    <h1 className='text-4xl text-white font-bold'>URL Shortener</h1>
      <p className='text-lg text-gray-400 mt-4'>A simple URL shortener application</p>
      <div className='mt-8 flex items-center justify-center'>
        <input type="text" value={url} onChange={(e) => setLink(e.target.value)} placeholder='Enter URL to shorten' className='border-1 border-blue-500 p-3 pl-5 pr-10 rounded-l-lg w-[95%] text-gray-100' />
        <button onClick={() => handleShorten(url)} className='bg-blue-500 text-white p-3 pl-10 pr-10 rounded-r-lg hover:bg-blue-600  border-1 border-blue-500 cursor-pointer'>{shortenedLink ? 'Copy' : 'Short'}</button>

     
     
     </div>
     <h1 className='text-xs text-yellow-500  mt-2'>{error}</h1>
     
    
    </>
  );
};

export default UrlShorten;
