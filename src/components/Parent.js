import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ParentName: "Narayana Murty",
    };
    this.WishParent = this.WishParent.bind(this) //event bining
  }

  WishParent (ChildName)
  {
    alert(`Happy Birthday ${this.state.ParentName} sir from your's lovely son ${ChildName}`)
  }

  render() {
    return (
      <>
      <Child WishHandler = {this.WishParent}></Child>
      </>
    );
  }
}

export default Parent;
