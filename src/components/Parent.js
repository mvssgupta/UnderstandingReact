import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ParentName: "Narayana Murty",
    };
    this.GreetParent = this.GreetParent.bind(this) //event bining
  }

  GreetParent ()
  {
    alert(`Hello ${this.state.ParentName} sir, welcome`)
  }

  render() {
    return (
      <>
      <Child GreetHandler = {this.GreetParent}></Child>
      </>
    );
  }
}

export default Parent;
