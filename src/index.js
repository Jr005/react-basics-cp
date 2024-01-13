import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";

let name = "John";
let lname = "Doe";
let age = 30;

// create a new component
// this component should produce some HTML
const App = () => {
  return (
    <div>
      Hello my name is {name + " " + lname} and i am {age} years old.
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
