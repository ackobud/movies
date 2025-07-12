import MovieCard from "./Snippets/MovieCard";

const SearchResults = ({ movies }) => {
  console.log(movies);
  return (
    <div className="bg-dark">
      <container className="d-flex flex-wrap">
        {movies.map((movie) => {
          return <MovieCard movie={movie} />;
        })}
      </container>
    </div>
  );
};

export default SearchResults;
