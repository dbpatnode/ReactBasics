import "./index.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [status, setStatus] = useState("Open");
  return (
    <div>
      <h1>Status: {status}</h1>
      <button onClick={() => setStatus("Closed")}>Closed</button>
      <button onClick={() => setStatus("Open")}>Open</button>
      <button onClick={() => setStatus("Sorry we'll be back in a bit")}>
        Come back soon
      </button>
    </div>
  );
}
ReactDOM.render(
  <App />,

  document.getElementById("root")
);
