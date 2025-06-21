import axios from "axios";
import { use, useState } from "react";

const Track = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [url, setUrl] = useState('');
  const [error, setError] = useState(null);
  const [trackData, setTrackData] = useState(null);
  const [loading , setLoading] = useState(false);

  const handleTrack = () => {
    setLoading(true);
    const parts = url.split('/');
    const id = parts[parts.length - 1];

    if (!id) {
      setError('Invalid URL format. Cannot extract ID.');
      setTrackData(null);
      setLoading(false);
      return;
    }

    console.log("Tracking ID:", id);

    axios.get(`${apiUrl}/Track/${id}`)
      .then((response) => {
        if (response.data) {
          setTrackData(response.data);
          setError(null);
           setLoading(false);
        } else {
          setError('No data found for this URL');
          setTrackData(null);
           setLoading(false);
        }
      })
      .catch((error) => {
        console.error('Error tracking URL:', error);
        setError('Error tracking URL');
        setTrackData(null);
         setLoading(false);
      });
  };

  return (
    <>
      <div>
        <h1 className='text-4xl text-white font-bold flex justify-center items-center'>Track URL</h1>
        <div className='mt-8 flex items-center justify-center'>
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            type="text"
            placeholder='Enter URL to Track'
            className='border-1 border-blue-500 p-3 pl-5 pr-10 rounded-l-lg w-[95%] text-gray-100'
          />
          <button
            onClick={handleTrack}
            className={`bg-blue-500 text-white p-3 pl-10 pr-10 rounded-r-lg hover:bg-blue-600 border-1 border-blue-500 cursor-pointer ${loading ? 'opacity-50  cursor-not-allowed' : ' opacity-100 cursor-pointer'}`}
          >
            Track
          </button>
        </div>
      </div>

      {error && <h1 className='text-xs text-yellow-500 mt-2'>{error}</h1>}

      {trackData && (
        <div className="mt-4 text-white text-center  ">
          <h2 className="text-lg font-semibold ">Tracked URL Info:</h2>
          <p className="text-wrap"><strong>Original URL:</strong> {trackData.url}</p>
      
          <p><strong>Created At:</strong> {new Date(trackData.createdAt).toLocaleString()}</p>
              <p><strong>Click Count:</strong> {trackData.count}</p>
              <p><strong>Unique Visitors:</strong> {trackData.visitors.length}</p>
        </div>
        
      )}
      <div className="mt-4 text-white text-center "></div>
    </>
  );
};

export default Track;
