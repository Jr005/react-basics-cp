import React from "react";
import ReactDOM from "react-dom";

let name = "John";
let lname = "Doe";
let age = 30;

// Style Example Component - This is a child component that I can use inside of my parent component.
const StyleExample = () => {
  return (
    <div>
      <h1 style={{ color: "red", textAlign: "center" }}>
        Welcome to My Simple React Page
      </h1>
      <p>This is a basic example of a React component.</p>
      <img
        src="https://img.freepik.com/free-photo/shallow-focus-vertical-shot-cute-golden-retriever-puppy-sitting-grass-ground_181624-27259.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1705104000&semt=sph"
        alt="Descriptive Alt Text"
      />
    </div>
  );
};

// Parent Component - The Main Component that shows on the web page. I can put multiple components inside of this component.
const App = () => {
  return (
    <div>
      <StyleExample />
      <div>
        Hello my name is {name + " " + lname} and i am {age} years old.
      </div>
      <div>
        <h2>My Hobbies</h2>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
