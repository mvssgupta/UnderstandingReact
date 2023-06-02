import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  Increment() {
    // this.setState ({
    //     count : this.state.count + 1
    // })
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }
  Decrement() {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1,
      });
    }
  }
  Reset() {
    this.setState({
      count: 0,
    });
  }

  render() {
    return (
      <>
        <h4>Count - {this.state.count}</h4>
        <button className="CounterButton" onClick={() => this.Increment()}>
          Increment
        </button>
        <button className="CounterButton" onClick={() => this.Decrement()}>
          Decrement
        </button>
        <button className="CounterButton" onClick={() => this.Reset()}>
          Reset
        </button>
      </>
    );
  }
}

export default Counter;

// SETSTATE CRITERIAS:

// Always make use of setState and never modify the state directly.

// Code has to be executed after the state has been updated ? Place that code in the call back
// function which is the second argument to the setState method.

// When you have to update state based on the previous state value, pass in a function as an
// argument instead of the regular object.
