import React, { Component } from "react";


class Child extends Component {
  componentDidMount() {
    console.log("Child-Mounted");
  }
  render() {
    console.log("Child rendered");
    return <h1>Hello Child</h1>
  }
}


export default Child;