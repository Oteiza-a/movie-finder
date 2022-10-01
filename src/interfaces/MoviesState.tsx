import { Movie } from "./Movie";
import { MovieDetail } from "./MovieDetail";

export interface MoviesState {
  movies: Movie[]
  favoriteMovies: Movie[]
  loading: boolean
  movieDetail: MovieDetail| null
}