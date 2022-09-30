import { Movie } from "../interfaces/Movie"
import { RawMovie } from "../interfaces/RawMovie";

export const movieAdapter = (rawMovie: RawMovie) => {
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