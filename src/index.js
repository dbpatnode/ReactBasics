import "./index.css";
import React, { useReducer } from "react";

// useReducer hooks
import ReactDOM from "react-dom";

function Checkbox() {
  // setting the two values of useReducer (checked and toggle) to be initially be false(checked value) and to toggle to the opposite of whatever current state is on when the on change is called(toggle).
  // if inital state is false the toggle will change it to to true onChange.
  const [checked, toggle] = useReducer((checked) => !checked, false);

  return (
    <>
      <input type="checkbox" value={checked} onChange={toggle} />
      {checked ? "checked" : "not checked"}
    </>
  );
}

ReactDOM.render(
  <Checkbox />,

  document.getElementById("root")
);
