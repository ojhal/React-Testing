import React, { useState } from "react";

function Hooks() {
  const [name, setName] = useState("Ojhal");
  const [roll, setRoll] = useState(101);
  // const name = nameStateVariable[0];
  // const setName = nameStateVariable[1];
  const handleClick = () => {
    setName("Rajat");
    setRoll(456);
  }
  console.log("i am leaner");
  return (
    <React.Fragment>

      <h1>Name:{name}</h1>
      <h2>Roll:{roll}</h2>
      <button type="button" onClick={handleClick}>Change</button>
    </React.Fragment>
  );
}


export default Hooks;