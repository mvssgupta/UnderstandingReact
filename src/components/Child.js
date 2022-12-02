import React from 'react'

function Child(props) {
  return (
    <>
        <button onClick={() => props.WishHandler("Gupta")}>Call Parent</button>
    </>
  )
}

export default Child