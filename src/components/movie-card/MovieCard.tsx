import { capitalize } from "../../helpers/strings";
import { Movie } from "../../interfaces/Movie";
import { FiArrowRightCircle } from 'react-icons/fi';
import MarkFavorite from "../mark-favorite/MarkFavorite";
import { useMovies } from "../../hooks/useMovies";
import stylesVariables from "../../constants/stylesVariables";
import posterPlaceholder from '../../assets/images/poster-placeholder.jpeg';
import "./MovieCard.css"

interface MovieCardProps {
  movie: Movie
  onSeeMore: (movieId: string) => void
}

const MovieCard = ({ movie, onSeeMore }: MovieCardProps) => {
  const { id, title, year, type, poster } = movie;
  const { favoriteMovies, addFavoriteMovie, removeFavoriteMovie } = useMovies();
  const accentColor: string = stylesVariables.accent;
  const isFavorite: boolean = favoriteMovies.some((favMovie: Movie) => favMovie.id === id);

  const onMarkAsFavorite = () => {
    if (isFavorite) {
      removeFavoriteMovie(id);
    } else {
      addFavoriteMovie(movie);
    }
  }

  const onPosterError = ({ currentTarget }: any) => {
    currentTarget.onerror = null;
    currentTarget.src = posterPlaceholder;
  }
  
  return (
    <div className="movie-card" key={id}>
      <div className="movie-card__mark-favorite">
        <MarkFavorite isActive={isFavorite} onClick={onMarkAsFavorite} />
      </div>
      <div className="movie-card__content">
        <img 
          src={poster} 
          className="movie-card__poster" 
          alt="poster"
          onError={onPosterError}
        />
        <h4 className="movie-card__title">{title}</h4>
        <small className="small-text">{capitalize(type)}, {year}</small>
        <div className="movie-card__options">
          <button className="button button--secondary" onClick={() => onSeeMore(id)}>
            <span style={{ marginRight: "10px" }}>See more</span>
            <FiArrowRightCircle size="20" color={accentColor}/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;