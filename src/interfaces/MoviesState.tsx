import { Movie } from "./Movie";

export interface MoviesState {
  movies: Movie[]
  favoriteMovies: Movie[]
  loading: boolean
}