import { MovieDetail } from "../interfaces/MovieDetail";
import { MovieDetailRaw } from "../interfaces/MovieDetailRaw";

export const movieDetailAdapter = (rawMovieDetail: MovieDetailRaw) => {
  const { 
    Title,
    Year,
    Rated,
    Released,
    Runtime,
    Genre,
    Director,
    Writer,
    Actors,
    Plot,
    Language,
    Country,
    Awards,
    Poster,
    Ratings,
    Metascore,
    imdbRating,
    imdbVotes,
    imdbID,
    Type,
    DVD,
    BoxOffice,
    Production,
    Website,
   } = rawMovieDetail

  const movie: MovieDetail = {
    title: Title,
    year: Year,
    rated: Rated,
    released: Released,
    runtime: Runtime,
    genre: Genre,
    director: Director,
    writer: Writer,
    actors: Actors,
    plot: Plot,
    language: Language,
    country: Country,
    awards: Awards,
    poster: Poster,
    ratings: Ratings.map(({ Source, Value }) => ({ source: Source, value: Value })),
    metascore: Metascore,
    imdbRating: imdbRating,
    imdbVotes: imdbVotes,
    id: imdbID,
    type: Type,
    dvd: DVD,
    boxOffice: BoxOffice,
    production: Production,
    website: Website,
  }

  return movie;
}