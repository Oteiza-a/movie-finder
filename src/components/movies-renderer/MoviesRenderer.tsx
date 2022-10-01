import MovieCard from "../movie-card/MovieCard";
import { Movie } from "../../interfaces/Movie";
import { useNavigate } from "react-router-dom";
import MovieCardSkeleton from "../movie-card-skeleton/MovieCardSkeleton";


interface MoviesRendererProps {
  movies: Movie[]
  loading?: boolean
}

const MoviesRenderer = ({ movies, loading }: MoviesRendererProps) => {
  const navigate = useNavigate();
  const onSeeMore = (movieId: string) => {
    navigate(`/movie/${movieId}`);
  }

  const renderMovies = () => {
    return movies.map((movie: Movie) => (
      <div className="col-12 col-sm-6 col-lg-4 col-xl-3" key={movie.id}>
        <MovieCard movie={movie} onSeeMore={onSeeMore}/>
      </div>
    ))
  }

  const renderSkeletons = () => {
    return Array.from(Array(10).keys()).map((index) => (
      <div className="col-12 col-sm-6 col-lg-4 col-xl-3" key={index}>
        <MovieCardSkeleton />
      </div>
    ))
  }
  
  return (
    <div className="row pt-4">
      {loading ? renderSkeletons() : renderMovies()}
    </div>
  );
};

export default MoviesRenderer;