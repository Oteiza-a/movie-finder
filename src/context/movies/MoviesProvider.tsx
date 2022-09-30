import { ReactNode, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { openDialog } from "../../services/DialogService";
import { SET_FAVORITE_MOVIES, SET_MOVIES } from "../types";
import MoviesReducer from "./MoviesReducer";
import { MoviesState } from "../../interfaces/MoviesState";
import { MoviesSearch } from "../../interfaces/MoviesSearch";
import { getMovies } from "../../services/MoviesService";
import { MoviesProviderValue } from "../../interfaces/MoviesProviderValue";
import MoviesContext from "./MoviesContext";
import { RawMovie } from "../../interfaces/RawMovie";
import { movieAdapter } from "../../adapters/movieAdapter";
import { moviesMocks } from "../../constants/moviesMocks";
import { Movie } from "../../interfaces/Movie";
import { getLocalStorageObject } from "../../helpers/localStorage";

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
    favoriteMovies: [],
    loading: false,
  });
  
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(MoviesReducer, initialState);

  useEffect(() => {
    localStorage.setItem("movies-state", JSON.stringify(state));
  }, [state])

  const searchMovies = async (search: MoviesSearch) => {

    dispatch({ type: SET_MOVIES, payload: { movies: moviesMocks } as MoviesState })
    return
    const moviesRes: RawMovie[] = await getMovies(search);

    if (!moviesRes?.length) {
      openDialog("movies-get-error");
    } else {
      const adaptedMovies = moviesRes.map((rawMovie: RawMovie) => movieAdapter(rawMovie));
      dispatch({ type: SET_MOVIES, payload: { movies: adaptedMovies } as MoviesState })
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

  const { movies, favoriteMovies, loading } = state;
  const providerValue: MoviesProviderValue = {
    movies,
    favoriteMovies,
    loading,
    searchMovies,
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