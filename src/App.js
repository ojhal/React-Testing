// import React, { Component } from 'react'




// export default class App extends Component {
//   state = {
//     change: false
//   };
//   clickHandle = () => {
//     this.setState({ change: true });
//   };
//   render() {
//     const btnStyle = {
//       color: "blue",
//       fontSize: "50px",
//       backgroundColor: "orange"
//     };
//     if (this.state.change) {
//       btnStyle.backgroundColor = "grey";
//     }

//     return (
//       <button onClick={this.clickHandle} style={btnStyle}>Button</button>
//     );
//   }
// }
//   state = {
//     users: [
//       { id: 101, name: "Rahul", password: "3245gfgf" },
//       { id: 102, name: "Rahul1", password: "3245gfjkl" },
//       { id: 103, name: "Rahul2", password: "3245gfghj" },
//     ],
//     isLoggedIn: false
//   }
//   render() {
//     const newUsers = this.state.users.map(user => {
//       console.log(user);
//       return (
//         <h1 key={user.id}>
//           ID: {user.id} Name: {user.name} password: {user.password}
//         </h1>
//       );
//     });
//     return (
//       <div>{newUsers}</div>
//     )


//   }
// }

// import React, { Component } from 'react';
// export default class App extends Component {
//   state = {
//     value: "this is some text in a text area"
//   };

//   render() {
//     return (
//       <div>
//         <form>
//           <textarea value={this.state.value} />
//         </form>
//       </div >
//     );


//   }
// }

// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: ""

//     };

//     this.textInput = React.createRef();
//   }

//   handleSubmit = e => {
//     e.preventDefault();
//     // console.log(this.textInput.current.value)
//     this.setState({ value: this.textInput.current.value })
//   };

//   render() {
//     return (
//       <React.Fragment>
//         <h2>You typed: {this.state.value}</h2>
//         <form onSubmit={this.handleSubmit}>
//           Input: <input type="text" ref={this.textInput} />
//           <input type="submit" value="Submit" />
//         </form>
//       </React.Fragment>


//     )

//   

import React, { Component } from "react";
import Ojhal from './Ojhal'
import Rahul from './Rahul'
export default class App extends Component {

  render() {
    return (
      <div>
        <Ojhal />
        <Rahul />

      </div>
    );
  }
}





