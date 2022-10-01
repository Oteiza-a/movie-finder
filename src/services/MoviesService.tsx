import axios from "axios";
import { MoviesSearch } from "../interfaces/MoviesSearch";
import { MovieRaw } from "../interfaces/MovieRaw";
import { MovieDetailRaw } from "../interfaces/MovieDetailRaw";
import { rawMovieDetailMock } from "../constants/rawMovieDetailMock";

const apiKey = "7582316f" 
const url = "https://omdbapi.com/";
const axiosInstance = axios.create({
  baseURL: url,
  params: { apikey: apiKey }
});


export const getMovies = async ({ search, page }: MoviesSearch): Promise<MovieRaw[]> => {
  try {
    const res = await axiosInstance.get('/', { params: { s: search, page }});
    return res.data?.Search;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export const getMovie = async (id: string): Promise<MovieDetailRaw | null> => {
  try {
    return rawMovieDetailMock;
    const res = await axiosInstance.get('/', { params: { i: id, plot: "full"}});
    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}