import React, { Component } from "react";


class Mounting extends Component {
  constructor(props) {
    super(props);
    console.log("Mounting-running");
    console.log(props);
  }
  render() {
    return <h1>Hello Ojhal</h1>
  };
}


export default Mounting;