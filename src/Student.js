import React, { Component } from "react";
import Marks from "./Marks";

class Student extends Component {
  render() {
    console.log("Student-Rendered [child of Mounting]");
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <Marks />

      </div>
    );
  }
}


// function Student(props) {
//   const handleClick = (e) => {

//     console.log("Button Clicked");
//   }
//   return (
//     <div>
//       <h1>Hello {props.name}</h1>
//       <a href="http://www.geekyshows.com" onClick={handleClick}>Click Me</a>
//     </div>
//   );
// }

// class Student extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "Ojhal",
//       roll: this.props.roll
//     };
//   }
//   handleClick = () => {
//     console.log("Button Clicked", this);
//   }
//   render() {
//     return (
//       <div>
//         <h1>Hello, {this.state.name} Your roll number is {this.state.roll}</h1>
//         <button onClick={this.handleClick}>Click Me</button>
//       </div>
//     );
//   }
// }


// const Student = props => {
//   return (
//     <div>
//       <h1>Hello, {props.name}</h1>
//       <h2>Your Roll: {props.roll}</h2>
//     </div>
//   );
// };

// class Student extends Component {
//   render() {
//     console.log(this.props.name)
//     console.log(this.props.roll)
//     return (
//       <div>
//         <h1>Hello, {this.props.name}</h1>
//         <h2>Your Roll: {this.props.roll}</h2>
//       </div>
//     );
//   }
// }
// Student.propTypes = {
//   name: Pt.string
// };

// class Student extends Component {
//   state = {
//     name: "Rahul",
//     roll: this.props.roll

//   };
//   render() {
//     console.log(this.state.name)
//     return <h1>Hello, {this.state.name} Your roll number is: {this.state.roll}</h1>;
//   }
// }


export default Student;