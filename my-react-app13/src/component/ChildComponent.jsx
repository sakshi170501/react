import React from 'react'

const ChildComponent = React.memo(function ChildComponent(props) {

  console.log("Child component got re-rendered again")

  return (
    <div>
      <button onClick={props.handleClick}>
        {props.buttonName}
      </button>
    </div>
  )
})

export default ChildComponent