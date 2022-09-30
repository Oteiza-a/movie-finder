import { createContext } from "react";
import { MoviesProviderValue } from "../../interfaces/MoviesProviderValue";

const MoviesContext = createContext<MoviesProviderValue>({} as MoviesProviderValue); 
export default MoviesContext