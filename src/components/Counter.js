import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  Increment()
  {
    this.setState ({
        count : this.state.count + 1
    })
  }
  Decrement()
  {
    if(this.state.count > 0)
    {
        this.setState ({
            count : this.state.count - 1
        })
    }
  }
  Reset()
  {
        this.setState ({
            count : 0
        })
  }

  render() {
    return (
      <>
        <h4>Count - {this.state.count}</h4>
        <button className="CounterButton" onClick={() => this.Increment()}>Increment</button>
        <button className="CounterButton" onClick={() => this.Decrement()}>Decrement</button>
        <button className="CounterButton" onClick={() => this.Reset()}>Reset</button>
      </>
    );
  }
}

export default Counter;
