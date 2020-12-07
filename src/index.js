import "./index.css";
import React from "react";
import ReactDOM from "react-dom";

function Lake({ name }) {
  return <h1> {name} </h1>;
}

function App() {
  return (
    <div>
      this is the app component, also heres the lake component being rendered:
      <Lake name="Lake Washington" />
      <Lake name="Lake Tahoe" />
      <Lake name="Lake Mead" />
    </div>
  );
}

ReactDOM.render(
  <App />,

  document.getElementById("root")
);
