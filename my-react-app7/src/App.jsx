
import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/childA';

// create context
const UserContext=createContext();

// wrap all the child inside the provider
const ThemeContext=createContext();


function App() {
  const[theme,setTheme]=useState('light');


  const[user,setUser]=useState({name:'sakshi kumari'});
 

  return (
   <UserContext.Provider value={user}>
     <ThemeContext.Provider value={{theme,setTheme}}>
      <div id='container' style={{backgroundColor:theme==='light'?'beige':'pink'}}>
         <ChildA/>

      </div>
     
    </ThemeContext.Provider>
   </UserContext.Provider>


    // <>
    // <UserContext.Provider value={user}>
    //   <ChildA/>
    // </UserContext.Provider>
    // </>
   
  )
}

export default App
export {UserContext}
export{ThemeContext}
