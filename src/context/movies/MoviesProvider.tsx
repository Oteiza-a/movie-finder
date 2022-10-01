import { ReactNode, useEffect, useReducer } from "react";
import { openDialog } from "../../services/DialogService";
import { SET_FAVORITE_MOVIES, SET_MOVIES, SET_MOVIE_DETAIL } from "../types";
import MoviesReducer from "./MoviesReducer";
import { MoviesState } from "../../interfaces/MoviesState";
import { MoviesSearch } from "../../interfaces/MoviesSearch";
import { getMovie, getMovies } from "../../services/MoviesService";
import { MoviesProviderValue } from "../../interfaces/MoviesProviderValue";
import MoviesContext from "./MoviesContext";
import { Movie } from "../../interfaces/Movie";
import { getLocalStorageObject } from "../../helpers/localStorage";
import { MovieDetailRaw } from "../../interfaces/MovieDetailRaw";
import { movieDetailAdapter } from "../../adapters/movieDetailAdapter";
import { MovieDetail } from "../../interfaces/MovieDetail";
import { MovieRaw } from "../../interfaces/MovieRaw";
import { movieAdapter } from "../../adapters/movieAdapter";

interface Props {
  children?: ReactNode
}

const initializeState = (initialValue: MoviesState): MoviesState => {
  const localState = getLocalStorageObject("movies-state");
  if (localState) return localState as MoviesState;
  return initialValue;
};

const MoviesProvider = ({ children }: Props): JSX.Element => {
  const initialState: MoviesState = initializeState({
    movies: [],
    totalResults: 0,
    favoriteMovies: [],
    loading: false,
    movieDetail: null,
  });
  
  const [state, dispatch] = useReducer(MoviesReducer, initialState);

  useEffect(() => {
    localStorage.setItem("movies-state", JSON.stringify(state));
  }, [state])

  const searchMovies = async (search: MoviesSearch) => {

    // dispatch({ type: SET_MOVIES, payload: { movies: moviesMocks } as MoviesState })
    // return
    const moviesRes = await getMovies(search);

    if (!moviesRes) {
      openDialog("movies-get-error");
    } else {
      const { Search: moviesResults, totalResults } = moviesRes;
      const adaptedMovies = moviesResults.map((rawMovie: MovieRaw) => movieAdapter(rawMovie));
      dispatch({ type: SET_MOVIES, payload: { movies: adaptedMovies, totalResults: Number(totalResults) } as MoviesState })
    }
  }

  const getMovieDetail = async (movieId: string) => {
    const movieRes: MovieDetailRaw | null = await getMovie(movieId);
    if (!movieRes) {
      openDialog("movies-get-error");
    } else {
      const adaptedMovieDetail: MovieDetail = movieDetailAdapter(movieRes)
      dispatch({ type: SET_MOVIE_DETAIL, payload: { movieDetail: adaptedMovieDetail } as MoviesState })
    }
  }

  const addFavoriteMovie = (movie: Movie) => {
    dispatch({ 
      type: SET_FAVORITE_MOVIES, 
      payload: { favoriteMovies: [...favoriteMovies, movie] } as MoviesState 
    })
  }

  const removeFavoriteMovie = (movieId: string) => {
    const filteredMovies = favoriteMovies.filter((favMovie: Movie) => favMovie.id !== movieId);
    dispatch({ 
      type: SET_FAVORITE_MOVIES, 
      payload: { favoriteMovies: filteredMovies } as MoviesState 
    })
  }

  const { movies, totalResults, favoriteMovies, movieDetail, loading } = state;
  const providerValue: MoviesProviderValue = {
    movies,
    totalResults,
    favoriteMovies,
    loading,
    movieDetail: movieDetail || null,
    searchMovies,
    getMovieDetail,
    addFavoriteMovie,
    removeFavoriteMovie,
  }

  return (
    <MoviesContext.Provider value={providerValue}>
      {children}
    </MoviesContext.Provider>
  )
};


export default MoviesProvider;