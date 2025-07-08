import "./App.css";
import axios from "axios";
import Movies from "./Components/Movies";
import Navigation from "./Templates/Snippets/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Templates/Snippets/Footer";

const App = () => {
  return (
    <>
      <Navigation />
      <Movies />
      <Footer />
    </>
  );
};

export default App;
