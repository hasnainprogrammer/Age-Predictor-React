import React from "react";
import ReactDOM from "react-dom/client";
import { useEffect, useState } from "react";

function App() {
  const [inputName, setInputName] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);
  function handleClick(e) {
    e.preventDefault();
    setName(inputName);
  }
  useEffect(() => {
    fetch(`https://api.agify.io/?name=${name}`)
      .then((response) => response.json())
      .then((data) => {
        setAge(data.age);
      });
  }, [name]);

  return (
    <>
      <h1>useEffect Hook</h1>
      <hr />
      <br />
      <label>Enter your name: </label>
      <input type="text" onChange={(e) => setInputName(e.target.value)} />
      &nbsp;
      <button onClick={handleClick}>Predict My Age</button>
      <br />
      {age ? <h2>Your age might be : {age}</h2> : null}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
