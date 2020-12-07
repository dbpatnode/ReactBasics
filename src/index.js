import "./index.css";
import React from "react";
import ReactDOM from "react-dom";

let city = {
  name: "Seattle",
  country: "America",
};

ReactDOM.render(
  <h1>
    {" "}
    hello from {city.name} in {city.country}!
  </h1>,
  document.getElementById("root")
);
