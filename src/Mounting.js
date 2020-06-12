import React, { Component } from "react";
import Student from "./Student"

class Mounting extends Component {
  constructor(props) {
    super(props);
    console.log("Mounting-running");
    console.log(props);
    this.state = {
      roll: "766"
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Mounting-constructor called");
    console.log(props, state);
    return null;
  }

  componentDidMount() {
    console.log("Mounting-Mounted")
  }

  render() {
    console.log("Mounting-rendered")
    return <div>
      <Student name="Ojhal" />
    </div>
  };
}


export default Mounting;