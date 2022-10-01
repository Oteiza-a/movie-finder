import { capitalize } from "../../helpers/strings";
import { Movie } from "../../interfaces/Movie";
import IconArrowRight from '@iconscout/react-unicons/icons/uil-arrow-circle-right'
import MarkFavorite from "../mark-favorite/MarkFavorite";
import { useMovies } from "../../hooks/useMovies";
import stylesVariables from "../../constants/stylesVariables";
import "./MovieCard.css"
import { useNavigate } from "react-router-dom";

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
  
  return (
    <div className="movie-card" key={id}>
      <div className="movie-card__mark-favorite">
        <MarkFavorite isActive={isFavorite} onClick={onMarkAsFavorite} />
      </div>
      <div className="movie-card__content">
        <img src={poster} className="movie-card__poster" alt="poster"/>
        <h4 className="movie-card__title">{title}</h4>
        <small className="small-text">{capitalize(type)}, {year}</small>
        <div className="movie-card__options">
          <button className="button button--secondary" onClick={() => onSeeMore(id)}>
            <span style={{ marginRight: "10px" }}>See more</span>
            <IconArrowRight size="20" color={accentColor}/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;