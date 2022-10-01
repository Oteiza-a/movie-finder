import { MoviesState } from "../../interfaces/MoviesState";
import { SET_MOVIES, SET_MOVIES_LOADING, SET_FAVORITE_MOVIES, SET_MOVIE_DETAIL } from "../types";

interface Action {
  type: string,
  payload: MoviesState,
}

const MoviesReducer = (state: MoviesState, action: Action): MoviesState => {
  const { type, payload } = action;

  switch (type) {
    case SET_MOVIES:
      return {
        ...state,
        movies: payload.movies,
      }
    case SET_MOVIE_DETAIL:
      return {
        ...state,
        movieDetail: payload.movieDetail,
      }
    case SET_FAVORITE_MOVIES:
      return {
        ...state,
        favoriteMovies: payload.favoriteMovies,
      }
    case SET_MOVIES_LOADING:
      return {
        ...state,
        loading: payload.loading,
      }
  
    default:
      return state;
  }
}

export default MoviesReducer;