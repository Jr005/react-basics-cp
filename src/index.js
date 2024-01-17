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

// =============== PROPS COMPONENT EXAMPLE ===============

const PropsExample = (props) => {
  return <h1 onClick={props.printAlert}>{props.content}</h1>;
};

// Parent Component - The Main Component that shows on the web page. I can put multiple components inside of this component.
const App = () => {
  // This is a function example that I can use inside of my component.
  const printAlert = (message) => {
    alert(message);
  };

  return (
    <div>
      {/* importing a component */}
      <StyleExample />

      {/* Regular Text in this Main Component */}
      <div>
        Hello my name is {name + " " + lname} and i am {age} years old.
      </div>
      <div>
        <h2>My Hobbies</h2>
      </div>
      {/* ================== Props Example ================== */}
      <PropsExample content="This is a prop example" />
      <PropsExample
        content="I can put any text i want"
        printAlert={printAlert}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
