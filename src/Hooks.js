import React, { useState, useEffect } from "react";

function Hooks() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(50);

  // const [roll, setRoll] = useState(101);
  // const name = nameStateVariable[0];
  // const setName = nameStateVariable[1];
  const handleIncrement = () => {
    setCount(count + 1);
    // setRoll(456);
  };

  const handleDecrement = () => {
    setCount1(count1 - 1);

  };
  useEffect(() => {
    console.log("use effect called");

  }, [count1]);

  // console.log("i am leaner");
  return (
    <React.Fragment>

      <h1>Count UP:{count}</h1>
      {/* <h2>Roll:{roll}</h2> */}
      <button type="button" onClick={handleIncrement}>Increment</button>

      <h1>Count Down:{count1}</h1>
      {/* <h2>Roll:{roll}</h2> */}
      <button type="button" onClick={handleDecrement}>Decrement</button>
    </React.Fragment>
  );
}


export default Hooks;