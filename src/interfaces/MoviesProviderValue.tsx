import { Movie } from "./Movie";
import { MovieDetail } from "./MovieDetail";
import { MoviesSearch } from "./MoviesSearch";

export interface MoviesProviderValue {
  movies: Movie[],
  totalResults: number,
  movieDetail: MovieDetail | null,
  favoriteMovies: Movie[],
  loading: boolean,
  searchMovies: (search: MoviesSearch) => void,
  getMovieDetail: (movieId: string) => void,
  addFavoriteMovie: (movie: Movie) => void,
  removeFavoriteMovie: (movieId: string) => void,
}