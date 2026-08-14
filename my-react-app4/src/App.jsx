
import { useState } from 'react'
import './App.css'
import Logout from './components/Logout';
import Login from './components/login';

function App() {
  const[isLogin,setLogin]=useState(false);
  if(!isLogin){
    return(
      <Login/>
    )

  }
 







  // <div>
  //   {isLogin && <Logout/>}
  // </div>
  





  

  // return(
  //   <div>
  //     {isLogin?<Logout/>:<Login/>}
  //   </div>
  // )





  // if(isLogin){
  //   return(
  //     <Logout/>
  //   )
  // }
  // else{
  //   return(
  //     <Login/>
  //   )
  // }
}

export default App
