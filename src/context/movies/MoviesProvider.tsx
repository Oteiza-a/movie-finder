import { ReactNode, useEffect, useReducer } from "react";
import { openDialog } from "../../services/DialogService";
import { SET_FAVORITE_MOVIES, SET_MOVIES, SET_MOVIES_LOADING, SET_MOVIE_DETAIL, SET_TYPEAHEAD_SUGGESTIONS } from "../types";
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
import { typeaheadSuggestionAdapter } from "../../adapters/typeaheadSuggestion";

interface Props {
  children?: ReactNode
}

const initializeState = (initialValue: MoviesState): MoviesState => {
  const localState = getLocalStorageObject("movies-state");
  if (localState) {
    const localMoviesState = localState as MoviesState
    return { ...localMoviesState, movies: [] };
  }
  return initialValue;
};

const MoviesProvider = ({ children }: Props): JSX.Element => {
  const initialState: MoviesState = initializeState({
    movies: [],
    totalResults: 0,
    favoriteMovies: [],
    loading: false,
    movieDetail: null,
    typeaheadSuggestions: [],
  });
  
  const [state, dispatch] = useReducer(MoviesReducer, initialState);

  useEffect(() => {
    localStorage.setItem("movies-state", JSON.stringify(state));
  }, [state])

  const searchMovies = async (search: MoviesSearch) => {
    dispatch({ type: SET_MOVIES_LOADING, payload: { loading: true } as MoviesState })
    const moviesRes = await getMovies(search);
    
    if (!moviesRes) {
      openDialog("movies-get-error");
    } else if (moviesRes.Error === "Movie not found!") {
      dispatch({ type: SET_MOVIES, payload: { movies: [] as Movie[], totalResults: 0 } as MoviesState })

    } else {
      const { Search: moviesResults, totalResults } = moviesRes;
      const adaptedMovies = moviesResults.map((rawMovie: MovieRaw) => movieAdapter(rawMovie));
      dispatch({ type: SET_MOVIES, payload: { movies: adaptedMovies, totalResults: Number(totalResults) } as MoviesState })
    }

    dispatch({ type: SET_MOVIES_LOADING, payload: { loading: false } as MoviesState })
  }

  const getMovieDetail = async (movieId: string) => {
    dispatch({ type: SET_MOVIE_DETAIL, payload: { movieDetail: null } as MoviesState })
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

  const getSuggestions = async (input :string) => {
    const moviesRes = await getMovies({ search: input, page: 1 });

    if (!moviesRes || moviesRes.Error) {
      dispatch({  
        type: SET_TYPEAHEAD_SUGGESTIONS,
        payload: { typeaheadSuggestions: [] as string[] } as MoviesState 
      })
      return
    }

    const typeaheadSuggestions = moviesRes.Search.map((movie: MovieRaw) => typeaheadSuggestionAdapter(movie));

    dispatch({ 
      type: SET_TYPEAHEAD_SUGGESTIONS, 
      payload: { typeaheadSuggestions } as MoviesState 
    })
  }

  const { movies, totalResults, favoriteMovies, movieDetail, loading, typeaheadSuggestions } = state;
  const providerValue: MoviesProviderValue = {
    movies,
    totalResults,
    favoriteMovies,
    loading,
    movieDetail: movieDetail || null,
    typeaheadSuggestions,
    searchMovies,
    getMovieDetail,
    addFavoriteMovie,
    removeFavoriteMovie,
    getSuggestions,
  }

  return (
    <MoviesContext.Provider value={providerValue}>
      {children}
    </MoviesContext.Provider>
  )
};


export default MoviesProvider;