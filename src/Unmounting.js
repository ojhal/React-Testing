import React, { Component } from "react";


class Unmounting extends Component {
  componentDidMount() {
    console.log("Unmounting-Mounted");
  }
  componentWillUnmount() {
    console.log("Unmounting-unmounted");

  }
  render() {
    console.log("Umounting rendered");
    return <h1>Hello Unmounting </h1>
  }
}


export default Unmounting;