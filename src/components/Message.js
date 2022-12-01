import React, { Component } from "react";

export default class Message extends Component {

    constructor()
    {
        super()
        this.state = {
            message : "Hey, Subscribe to the channel."
        }
    }
    Subscribed()
    {
        this.setState({
            message:"Thanks for subscribing."
        })
    }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick= {() => this.Subscribed()}>Subscribe</button>
      </div>
    );
  }
}
