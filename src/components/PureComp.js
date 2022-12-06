import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
  render() {
    console.log("Render method of Pure component")
    return (
      <>
      PureComponent {this.props.name}
      <h3>Summary of Pure component</h3>
      <ul>
       <li>We can create a Pure component by extending the PureComponent class.</li>
        
       <li>A PureComponent implements the shouldComponentUpdate lifecycle method
        by performing shallow comparison on the props and the state of component</li>

       <li>If there is no differnce , then the component is not rendered - then it boosts the performance.</li>
        
       <li>It is a good idea to ensure that all the children components are also 
        pure to avoid unexpected behaviour.</li>
        
       <li>Never mutate the state. Always return a new object that reflects the new state.</li>
        
      </ul>
      </>
    )
  } 
}

export default PureComp