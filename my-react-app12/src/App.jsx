
import { useState,useMemo } from 'react'
import './App.css'

function App() {
  const[count,setCount]=useState(0);
  const[input,setinput]=useState(0);
 function expensivetask(num){
    console.log('INSIDE EXPENSIVE TASK');
  for(let i=0;i<=1000000000;i++){input}
  return num*2;
 }
 let doublevalue=useMemo(()=>expensivetask(input),[input]);
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>
        Increment
      </button>
      <div>
        count:{count}
      </div><input type="Number" placeholder='enter the number' value={input}
      onChange={(e)=>{
        setinput(e.target.value)
      }}/>

      <div>
        Double:{doublevalue}
      </div>
    </div>
    
  )
}

export default App
