import { useContext } from "react";
import MoviesContext from "../context/movies/MoviesContext";

export const useMovies = () => useContext(MoviesContext);