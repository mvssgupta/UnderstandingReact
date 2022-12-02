import React from 'react'

function Child(props) {
  return (
    <>
        {/* to pass parameters from childComp to parentComp we have to use arrow functions */}
        <button onClick={() => props.WishHandler("Gupta")}>Call Parent</button>
    </>
  )
}

export default Child