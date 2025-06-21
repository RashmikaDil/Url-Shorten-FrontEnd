import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const apiUrl = import.meta.env.VITE_API_URL;

const Redirect = () => {
const {id} = useParams();
const [url, setUrl] = useState('');
   


useEffect(() => {
  const timer = setTimeout(() => {
     const handleRedirect = async () => {
        try{
            
            const response = await axios.get(`${apiUrl}/${id}`);
            setUrl(response.data.url);
            if (response.data.url) {
                window.location.href = response.data.url; 
            }else {
                console.error('No URL found for this ID');
                setUrl('No URL found for this ID');
            }
        }
        catch (error) {
            console.error('Error fetching URL:', error);
            setUrl('Error fetching URL');
        }
    };
    handleRedirect();
  }, 1000);

  return () => clearTimeout(timer);
}, []);


    return (
        <>
            <h1>Redirecting...</h1>
            {url && <p>Original URL: {url}</p>}
        </>
    );
};

export default Redirect;
