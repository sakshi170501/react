
import { useEffect,useState } from 'react'
import './App.css'
import Loggercomponents from './components/Loggercomponents'
import Timercomponent from './components/Timercomponent'
import Datafetcher from './components/Datafetcher'
import Resign from './components/Resign'

function App() {
  // const[count,setcount]=useState(0);
  // const[total,settotal]=useState(1);
  

  // useEffect(()=>{
  //   first

  //   return()=>{
  //     second
  //   }
  // },[third])

  // variation 1
  // useEffect(()=>{
  //   alert("i will run on each render  ")

  // })


  // variation2
  // that runs on only first 
  // useEffect(()=> {
  //   alert("i will run on first render")

  // },[])

  //variation3
  //that run when count is updated
  // useEffect(()=>{
  //   alert('i will run every time when countis updated')
  // },[count])

  // // multiple variation
  //  useEffect(()=>{
  //   alert('i will run every time when count,total is updated')
  // },[count,total])

  // useEffect(()=>{
  //   alert("count is updated")


  //   return()=>{
  //     alert("count is unmounted from ui");
  //   }
  // },[count])



  
  // function handleClick(){
  //   setcount(count+1);
   
  // }
  // function handletotal(){
  //   settotal(total+1);
  // }

  return (
    <div>
      {/* <button onClick={handleClick}>
        update count
      </button>
      <br />
      count is:{count}
      <br />
      
       <button onClick={handletotal}>
        total count
      </button>
      <br />
      total is:{total} */}
      <Loggercomponents/>
      <Timercomponent/>
      <Datafetcher/>
      <Resign/>
    </div>
    
   
  )
}

export default App
