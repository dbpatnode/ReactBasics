import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
// througing the values of language, message and number within the parenthesis reduces the need to use props before them when being called in the return. This is called Destructuring
function Hello({ language, message, number }) {
  // console.log(Object.keys(props));

  return (
    <div>
      {/*if you have multiple elements within a return they need to be wrapped in a container (i.e. span, div or empt <>)  */}
      <h1>Welcome to {language}!</h1>
      <p> {message}</p>
      <p> {number}</p>

      {/* <p>we're using {Object.keys(props).length} props</p> */}
    </div>
  );
}

ReactDOM.render(
  <Hello
    language="React"
    message="lets make something really cool!"
    number={3}
  />,
  document.getElementById("root")
);
