import React from 'react'

function FunctionClick() {

    const clickHandler = ()=>{
        console.log('bclick')
    }
  return (
    <div>
      <button onClick={clickHandler}>Mf click this bitch in here</button>
      {/* we dont want a function call and but a function */}
    </div>
  )
}

export default FunctionClick
