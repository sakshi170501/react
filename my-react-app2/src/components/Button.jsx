import React from 'react'

function Button(props) {
  return (
    <div>
        {props.children}
        <button onClick={props.handleClick}>{props.text}</button>

    </div>
    
  )
}

export default Button
