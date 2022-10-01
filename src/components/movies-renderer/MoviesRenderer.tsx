import MovieCard from "../movie-card/MovieCard";
import { Movie } from "../../interfaces/Movie";
import { useNavigate } from "react-router-dom";

interface MoviesRendererProps {
  movies: Movie[]
}

const MoviesRenderer = ({ movies }: MoviesRendererProps) => {
  const navigate = useNavigate();

  const onSeeMore = (movieId: string) => {
    navigate(`/movie/${movieId}`);
  }
  return (
    <div className="row pt-4">
      {movies.map((movie: Movie) => (
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3" key={movie.id}>
          <MovieCard movie={movie} onSeeMore={onSeeMore}/>
        </div>
      ))}
    </div>
  );
};

export default MoviesRenderer;