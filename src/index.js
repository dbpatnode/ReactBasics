import "./index.css";
import React from "react";
import ReactDOM from "react-dom";

function Lake({ name }) {
  return (
    <div>
      <h1> lets go swimming in {name}</h1>
    </div>
  );
}

function SkiResort({ name }) {
  return (
    <div>
      <h1> ready to shred some gnar up in {name}</h1>
    </div>
  );
}

// function App(props) {
//   // if season is set to summer return the Lake component with the name element being assigned to the lake name
//   if (props.season === "summer") {
//     return <Lake name="Lake Washington" />;
//     // if season is set to winter return the SkiResort component with the name element being assigned to the mountain name
//   } else if (props.season === "winter") {
//     return <SkiResort name="Jackson Hole" />;
//   }

//   // any other values besides winter and summer will cause error.
// }

// ///////////////////////////////////////////////
// THIS CAN BE WRITTEN AS TURNARY STATEMENT LIK SO:
//////////////////////////////////////////////////

function App(props) {
  return (
    <div>
      {props.season === "summer" ? (
        // if season = summer then it returns the Lake component
        <Lake name="Lake Washington" />
      ) : props.season === "winter" ? (
        // if season = winter then it returns the SkiResort component
        <SkiResort name="Jackson Hole" />
      ) : (
        // if season doesnt equal either summer or winter then return this message
        <h1>looks like were out of season</h1>
      )}
    </div>
  );
}
ReactDOM.render(
  <App season="mid sommar" />,

  document.getElementById("root")
);
