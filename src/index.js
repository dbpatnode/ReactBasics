import "./index.css";
import React from "react";
import ReactDOM from "react-dom";

// array of objects to be rendered:
const lakeList = [
  { id: "1", name: "Lake Washington", trailhead: "echo" },
  { id: "1", name: "Lake Tahoe", trailhead: "bravo" },
  { id: "1", name: "Lake Mead", trailhead: "charlie" },
];
function App({ lakes }) {
  return (
    <div>
      {lakes.map((lake) => (
        <div>
          <h3>{lake.name}</h3>
          <p> accesed by the {lake.trailhead} trailehead</p>
        </div>
      ))}
    </div>
  );
}

ReactDOM.render(
  <App lakes={lakeList} />,

  document.getElementById("root")
);
