import axios from "axios";
import { MoviesSearch } from "../interfaces/MoviesSearch";
import { MovieRaw } from "../interfaces/MovieRaw";
import { MovieDetailRaw } from "../interfaces/MovieDetailRaw";

const apiKey = "7582316f" // TODO: set in .env file in production
const url = "https://omdbapi.com/";
const axiosInstance = axios.create({
  baseURL: url,
  params: { apikey: apiKey }
});

interface SearchRes {
  Response: boolean
  Search: MovieRaw[]
  totalResults: number
}

export const getMovies = async ({ search, page }: MoviesSearch): Promise<SearchRes | null> => {
  try {
    const res = await axiosInstance.get('/', { params: { s: search, page }});
    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const getMovie = async (id: string): Promise<MovieDetailRaw | null> => {
  try {
    // return rawMovieDetailMock;
    const res = await axiosInstance.get('/', { params: { i: id, plot: "full"}});
    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}