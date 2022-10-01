import { Movie } from "../interfaces/Movie"
import { MovieRaw } from "../interfaces/MovieRaw";

export const movieAdapter = (rawMovie: MovieRaw) => {
  const { Title, Year, imdbID, Type, Poster } = rawMovie

  const movie: Movie = {
    id: imdbID,
    title: Title,
    year: Year,
    type: Type,
    poster: Poster,
  }

  return movie;
}