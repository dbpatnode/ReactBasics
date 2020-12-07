import "./index.css";
import React from "react";
import ReactDOM from "react-dom";

const lakeList = ["Lake Washington", "Lake Tahoe", "Lake Mead"];
function App({ lakes }) {
  return (
    <div>
      <ol>
        {lakes.map((lake) => (
          <li>{lake}</li>
        ))}
      </ol>
    </div>
  );
}

ReactDOM.render(
  <App lakes={lakeList} />,

  document.getElementById("root")
);
