import React, { Component } from "react";

class FormControlledComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      course: "C++",
    };
  }
  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  CommentsHandler = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  ChangeCourse = (event) => {
    this.setState({
      course: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(`Welcome ${this.state.username} , your choice of choosing ${this.state.course} is a great choice.`)
    event.preventDefault();
  }

  render() {
    return (
      <>
        <form onSubmit = {this.handleSubmit}>
          <div>
            <label>UserName : </label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleUsernameChange}
            ></input>
          </div>
          <div>
            <label>Comments : </label>
            <textarea
              value={this.state.comments}
              onChange={this.CommentsHandler}
            ></textarea>
          </div>
          <div>
            <label>Course : </label>
            <select value={this.state.course} onChange={this.ChangeCourse}>
              <option value="C++">C++</option>
              <option value="Java">Java</option>
              <option value="Python">Python</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

export default FormControlledComponent;
