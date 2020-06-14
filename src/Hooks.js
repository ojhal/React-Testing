import React, { useState } from "react";

function Hooks() {
  const nameStateVariable = useState("Ojhal");
  console.log("i am leaner");
  return (
    <React.Fragment>

      <h1>{nameStateVariable[0]}</h1>
    </React.Fragment>
  );
}


export default Hooks;