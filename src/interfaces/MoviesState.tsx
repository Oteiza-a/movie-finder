import { Movie } from "./Movie";
import { MovieDetail } from "./MovieDetail";

export interface MoviesState {
  movies: Movie[]
  totalResults: number,
  favoriteMovies: Movie[]
  loading: boolean
  movieDetail: MovieDetail | null
  typeaheadSuggestions: string[]
}