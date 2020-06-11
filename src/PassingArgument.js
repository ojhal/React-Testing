import React, { Component } from "react";

class PassingArgument extends Component {

  state = {
    id: 1,
    name: "Ojhal"
  };

  handleClick = id => {
    console.log(id);
  };

  handleClickArg = () => {
    this.handleClick(this.state.id);
  };

  render() {
    return (
      <div>
        <h1>Hello, {this.state.name}</h1>
        <button onClick={this.handleClickArg}>Delete</button>

      </div>
    );
  }

}


export default PassingArgument;