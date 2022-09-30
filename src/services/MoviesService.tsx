import axios from "axios";
import { MoviesSearch } from "../interfaces/MoviesSearch";

const apiKey = "7582316f" 
const url = "https://omdbapi.com/";
const axiosInstance = axios.create({
  baseURL: url,
  params: { apikey: apiKey }
});


export const getMovies = async ({ search, page }: MoviesSearch) => {
  try {
    const res = await axiosInstance.get('/', { params: { s: search, page }});
    return res.data?.Search;
  } catch (error) {
    console.error(error);
    return [];
  }
}