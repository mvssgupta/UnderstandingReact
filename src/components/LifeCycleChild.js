import React, { Component } from "react";

class LifeCycleChild extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    console.log("from LifeCycleChild constructor");
  }

  static getDerivedStateFromProps() {
    console.log("from LifeCycleChild getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("from LifeCycleChild componentDidMount");
  }

  render() {
    console.log("from LifeCycleChild render");
    return (
      <>
       LifeCycleChild body
      </>
    );
  }
}

export default LifeCycleChild;
