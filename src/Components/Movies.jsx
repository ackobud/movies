import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../Templates/Snippets/MovieCard";

const Movies = () => {
  const [movieName, setMovieName] = useState("Lord of the rings");
  const [movieData, setMovieData] = useState({});

  const searchMovieByTitle = () => {
    axios
      .get(
        `${process.env.REACT_APP_OMDBAPI_URL}?t=${movieName}&apikey=${process.env.REACT_APP_OMDBAPI_KEY}`
      )
      .then((response) => setMovieData(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    searchMovieByTitle();
  }, []);

  return (
    <>
      <form>
        <input
          type="text"
          onInput={(e) => setMovieName(e.currentTarget.value)}
        />
        <button onClick={searchMovieByTitle} type="button">
          Search movies
        </button>
      </form>
      <MovieCard movie={movieData} />
    </>
  );
};

export default Movies;
