import React from 'react'

function ClickFunction() {

    function HandleClick()
    {
        console.log("Button Clicked")
    }
  return (
    <>
        <button onClick={HandleClick}>Click Me</button>
        {/* similarly we can handle events in class components also just by using onClick = {this.HandleClick} */}
    </>
  )
}

export default ClickFunction