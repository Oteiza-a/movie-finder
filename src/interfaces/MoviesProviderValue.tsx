import { Movie } from "./Movie";
import { MoviesSearch } from "./MoviesSearch";

export interface MoviesProviderValue {
  movies: Movie[],
  favoriteMovies: Movie[],
  loading: boolean,
  searchMovies: (search: MoviesSearch) => void,
  addFavoriteMovie: (movie: Movie) => void,
  removeFavoriteMovie: (movieId: string) => void,
}