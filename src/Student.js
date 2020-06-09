import React, { Component } from "react";
import Pt from "prop-types";

// const Student = props => {
//   return (
//     <div>
//       <h1>Hello, {props.name}</h1>
//       <h2>Your Roll: {props.roll}</h2>
//     </div>
//   );
// };

class Student extends Component {
  render() {
    console.log(this.props.name)
    console.log(this.props.roll)
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        <h2>Your Roll: {this.props.roll}</h2>
      </div>
    );
  }
}
Student.propTypes = {
  name: Pt.string
};


export default Student;