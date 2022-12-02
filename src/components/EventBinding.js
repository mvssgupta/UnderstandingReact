import React, { Component } from 'react'

class EventBinding extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: "Hello, I'm Gupta"
      }

    //   this is event binding in the constructor itself
      this.ButtonHandler  = this.ButtonHandler.bind(this)
    }

    // ButtonHandler()
    // {
    //     this.setState ({
    //         message : "Welcome to my Personal Website!"
    //     })
    // }

    // final version ( using class property as arrow function) -> this is called as class property approach
    ButtonHandler = () => {
        this.setState ({
            message : "Welcome to my Personal Website!"
        })
    }

    // generally there are four types of event binding 
  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>

        {/* event binding in render method as follows */}
        {/* <button onClick={this.ButtonHandler.bind(this)}>Click Me</button> */}

        {/* event binding using arrow function as follows */}
        {/* <button onClick={() => this.ButtonHandler()}>Click Me</button> */}

        {/* event binding in the constructor itself  , in general this is the best way to bind
        since binding happens only once that is in the constructor*/}
        {/* <button onClick={this.ButtonHandler}>Click Me</button> */}

        {/* the final approach is using class property as arrow function */}
        <button onClick={this.ButtonHandler}>Click Me</button>

      </div>
    )
  }
}

export default EventBinding