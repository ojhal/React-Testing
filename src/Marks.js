import React, { Component } from "react";

class Marks extends Component {
  render() {
    console.log("Marks-rendered [child of Student]");
    return (

      <div>
        <h1>Marks Component</h1>
      </div>
    );
  }
}

export default Marks;