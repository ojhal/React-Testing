import React, { Component } from "react";
export default class Ojhal extends Component {
  state = {
    gunshots: 0
  };
  handleGunshots = () => {
    this.setState({ gunshots: this.state.gunshots + 1 })
  }
  render() {
    return (
      <div>
        <h3 onMouseOver={this.handleGunshots}>Ojhal Gunshots: {this.state.gunshots}</h3>

      </div>
    );
  }
}
