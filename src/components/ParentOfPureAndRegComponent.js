import React, { Component } from 'react'
import PureComp from './PureComp'
import RegularComponent from './RegularComponent'

class ParentOfPureAndRegComponent extends Component {

    constructor(props) {
    super(props)

        this.state = {
            name:"Gupta"
        }
    }

    componentDidMount()
    {
        setInterval(() => {
            this.setState({
                name:"Gupta"
            })
        },3000)
    }

  render() {
    console.log("Render method of Parent component");
    return (
      <>
        ParentOfPureAndRegComponent
        <RegularComponent name={this.state.name}></RegularComponent>
        <PureComp name={this.state.name}></PureComp>
      </>
    )
  }
}

export default ParentOfPureAndRegComponent