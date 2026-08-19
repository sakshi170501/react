import React, { useContext } from 'react'
import {ThemeContext,UserContext} from '../App'

function ChildC() {
    const user=useContext(UserContext);
    const {theme,setTheme}=useContext(ThemeContext);
    function handleclick(){
        if(theme ==='light')
            setTheme('dark');
        else
            setTheme('light');

    }
  return (
    <div>
        <button onClick={handleclick}>
            Change Theme
        </button>
        data:{user.name}
    </div>
  )
}

export default ChildC
