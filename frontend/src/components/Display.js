import axios from 'axios';
import React,{useState, useEffect} from 'react';
import '../styles/components/Display.css';



const Display = () => {
  const [title, setTitle] = useState([]);
  useEffect(() => {
    async function getStoredata(){
      const response = await axios.get('http://localhost:3001/details');
      setTitle(response.data[0].name);
    }
    getStoredata();
  })
    
  return (
    <div className='title'>{title}</div>
  )
}

export default Display