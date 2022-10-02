import { MovieRaw } from "../interfaces/MovieRaw";

export const typeaheadSuggestionAdapter = (rawMovie: MovieRaw): string => {
  const { Title } = rawMovie
  return Title;
}