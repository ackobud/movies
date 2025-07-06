import "./App.css";
import axios from "axios";
import Movies from "./Components/Movies";

axios
  .get(
    process.env.REACT_APP_OMDBAPI_URL +
      "?t=Terminator&apikey=" +
      process.env.REACT_APP_OMDBAPI_KEY
  )
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

const App = () => {
  return (
    <>
      <Movies />
    </>
  );
};

export default App;
