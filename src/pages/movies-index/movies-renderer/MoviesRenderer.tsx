import MovieCard from "../../../components/movie-card/MovieCard";
import { Movie } from "../../../interfaces/Movie";

interface MoviesRendererProps {
  movies: Movie[]
}

const MoviesRenderer = ({ movies }: MoviesRendererProps) => {
  return (
    <div className="row pt-4">
      {movies.map((movie: Movie) => (
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3" key={movie.id}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default MoviesRenderer;