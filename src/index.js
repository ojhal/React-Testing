// import React from "react";
// import ReactDOM from "react-dom";
// import Unmounting from "./Unmounting";
// import Child from "./Child";

// ReactDOM.render(<Unmounting />, document.getElementById("root"));
// ReactDOM.render(<Child />, document.getElementById("stu"));
// ReactDOM.unmountComponentAtNode(document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App consumer={false} />, document.getElementById("root"));