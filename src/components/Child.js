import React from 'react'

function Child(props) {
  return (
    <>
        <button onClick={props.GreetHandler}>Call Parent</button>
    </>
  )
}

export default Child