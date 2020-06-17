import React from "react";
import useCustomCounter from "./Custom";
function Hooks() {
  const data = useCustomCounter();
  const data1 = useCustomCounter();


  return (
    <React.Fragment>
      <h1>Count up: {data.count}</h1>
      <button type="button" onClick={data.handleIncrement}>Increment</button>


      <h1>Count up: {data1.count}</h1>
      <button type="button" onClick={data1.handleIncrement}>Increment</button>
    </React.Fragment>

  );
}

// function Hooks() {
//   const [count, setCount] = useState(0);
//   const [count1, setCount1] = useState(50);

//   // const [roll, setRoll] = useState(101);
//   // const name = nameStateVariable[0];
//   // const setName = nameStateVariable[1];
//   const handleIncrement = () => {
//     setCount(count + 1);
//     // setRoll(456);
//   };

//   const handleDecrement = () => {
//     setCount1(count1 - 1);

//   };
//   useEffect(() => {
//     console.log("use effect called");

//   }, [count1]);

//   // console.log("i am leaner");
//   return (
//     <React.Fragment>

//       <h1>Count UP:{count}</h1>
//       {/* <h2>Roll:{roll}</h2> */}
//       <button type="button" onClick={handleIncrement}>Increment</button>

//       <h1>Count Down:{count1}</h1>
//       {/* <h2>Roll:{roll}</h2> */}
//       <button type="button" onClick={handleDecrement}>Decrement</button>
//     </React.Fragment>
//   );
// }


export default Hooks;