import "./index.css";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function App() {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");

  useEffect(() => {
    console.log(`field 1: ${value}`);
  }, [value]);

  useEffect(() => {
    console.log(`field 2: ${value2}`);
  }, [value2]);

  return (
    <>
      <label>
        Favorite fruit:
        <input value={value} onChange={(e) => setValue(e.target.value)} />
      </label>
      <br />
      <br />
      <label>
        Second favorite fruit:
        <input value={value2} onChange={(e) => setValue2(e.target.value)} />
      </label>
    </>
  );
}
ReactDOM.render(
  <App />,

  document.getElementById("root")
);
