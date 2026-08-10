
import { useState } from 'react'
import './App.css'
import Button from './components/button'
import Card from './components/Card'

function App() {
  const[count,setCount]=useState(0);
  function handleClick(){
    setCount(count+1);
  }


  return (
    
    <div>
      <Button handleClick={handleClick} text="click me">
        <h1>{count}</h1>
      </Button>
     
    </div>
  )
}

export default App
