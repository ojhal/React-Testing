import React, { Component } from 'react'




export default class App extends Component {
  render() {
    const btnStyle = {
      color: "blue",
      backgroundColor: "orange"
    };
    return (
      <div>
        <button style={btnStyle}>button</button>

      </div>

    )
  }
}
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





