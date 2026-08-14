import React, { useEffect, useState } from 'react'

function Timercomponent() {
    const[seconds,setseconds]=useState(0);
    useEffect(()=>{
        console.log('time started')
        const intervalid=setInterval(()=>{
            setseconds(p => p+1);
        },1000);
        return()=>{
            console.log("time to end")
            clearInterval(intervalid);
        }
    },[]);
  return (
    <div>
        <h1>
            seconds:{seconds}
        </h1>
      
    </div>
  )
}

export default Timercomponent
