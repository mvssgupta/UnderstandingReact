import React, { Component } from "react";
import LifeCycleChild from "./LifeCycleChild";

// In lifeCycle there are four phases
//-> mounting = when an instance or component is being created and inserted in to the DOM
//-> updating = when a component is being re-rendered as a result of changes to either 
            // its props or state.
//-> unmounting = when a component is being removed from the DOM
//-> error handling = when there is an error during rendering, in a lifecycle method
                //  or in the constructor of any child component


class LifeCycleParent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    console.log("from LifeCycleParent constructor");
  }

  static getDerivedStateFromProps() {
    console.log("from LifeCycleParent getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("from LifeCycleParent componentDidMount");
  }

  render() {
    console.log("from LifeCycleParent render");
    return (
      <>
        Understanding order of execution in mounting phase of LifeCycle, open
        the console in developer tools and watch the order of execution.
        <LifeCycleChild></LifeCycleChild>
      </>
    );
  }
}

export default LifeCycleParent;
