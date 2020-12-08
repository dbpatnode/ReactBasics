import "./index.css";
import React from "react";
import ReactDOM from "react-dom";

function Lake() {
  return <h1> lake</h1>;
}

function SkiResort() {
  return <h1> ski resort</h1>;
}

function App() {
  return (
    // the empty <> allows you to render multiple components without having to clutter up your application with extra divs
    <>
      <Lake />
      <SkiResort />
    </>
  );
}
ReactDOM.render(
  <App />,

  document.getElementById("root")
);
