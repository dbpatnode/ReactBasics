import "./index.css";
import React, { useState, useEffect } from "react";
// hooks
import ReactDOM from "react-dom";

function GitHubUser({ login }) {
  // using useState hooks to set initial state of data to null, and setData to change value later on.
  const [data, setData] = useState(null);

  // using useEffect to fetch to the GitHub API with username as the endpoint
  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      // turning the respons from the API into JSON
      .then((resp) => resp.json())
      // using setData hooks to change the state value to whatever is output
      .then(setData)
      .catch(console.error);
  }, []);

  if (data) {
    // this reuturns the stringified JSON information
    // return <div>{JSON.stringify(data)}</div>;

    return (
      <div>
        <h1>{data.login}</h1>
        <img src={data.avatar_url} width={100} />
        <p>{data.html_url}</p>
      </div>
    );
  }
  // if no user return null
  return null;
}

function App() {
  return <GitHubUser login="dbpatnode" />;
}
ReactDOM.render(
  <App />,

  document.getElementById("root")
);
