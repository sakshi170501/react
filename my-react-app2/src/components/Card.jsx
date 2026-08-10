import React from 'react'

// function Card({name}) { you can write children as well
function Card(props){
  return (
    <div>
        {/* {name} */}
        {props.children}
      
    </div>
  )
}

export default Card
