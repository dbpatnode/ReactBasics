import "./index.css";
import React from "react";
import ReactDOM from "react-dom";

function Hello() {
  let language = "React";
  return (
    <div>
      {/*if you have multiple elements within a return they need to be wrapped in a container (i.e. span, div or empt <>)  */}
      <h1>Welcome to {language}!</h1>
      <p> lets build something cool!</p>
    </div>
  );
}

ReactDOM.render(<Hello />, document.getElementById("root"));
