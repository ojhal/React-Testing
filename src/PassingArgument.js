import React, { Component } from "react";

class PassingArgument extends Component {

  state = {
    id: 1,
    name: "Ojhal"
  };

  handleClick = (id, j, e) => {
    console.log(id, j, e);
  };

  render() {
    return (
      <div>
        <h1>Hello, {this.state.name}</h1>
        <button onClick={(e) => {
          this.handleClick(this.state.id, "101", e);
        }}>Delete</button>

      </div>
    );
  }

}


export default PassingArgument;