import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

// https://www.omdbapi.com/?t=Terminator&apikey=7c213dd
console.log(
  process.env.REACT_APP_OMDBAPI_KEY,
  process.env.REACT_APP_OMDBAPI_URL
);

// fetch("https:www.omdbapi.com/?t=Terminator&apikey=7c213dd")
//   .then((response) => response.json())
//   .then((jsonResponse) => console.log(jsonResponse));

axios
  .get(
    process.env.REACT_APP_OMDBAPI_URL +
      "?t=Terminator&apikey=" +
      process.env.REACT_APP_OMDBAPI_KEY
  )
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
