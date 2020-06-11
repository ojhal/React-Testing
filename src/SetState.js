import React, { Component } from "react";

class SetState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Ojhal",
      roll: this.props.roll
    };
  }
  handleClick = () => {
    this.setState((state, props) => {
      console.log(props.roll);
    });

  };



  render() {
    return (
      <div>
        <h1>I am learner</h1>
        <h1>Hello, {this.state.name} Your roll number is {this.state.roll}</h1>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

export default SetState;