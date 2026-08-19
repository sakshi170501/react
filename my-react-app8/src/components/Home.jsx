import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'


const Home=()=>{
    const  navigate=useNavigate();

function handleclick() {
    navigate('/about');

}
  return (
    <div>
      Home page
      <button onClick={handleclick}>
        Move to about page
        
      </button>
    </div>
  )
}

export default Home
