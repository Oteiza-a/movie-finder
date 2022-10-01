import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import MoviesRenderer from "../../components/movies-renderer/MoviesRenderer";
import NavigationBar from "../../components/nav-bar/NavigationBar";
import { useMovies } from "../../hooks/useMovies";
import { MoviesSearch } from "../../interfaces/MoviesSearch";

const MoviesIndex = (): JSX.Element => {
  const [page, setPage] = useState(1);
  const { movies, searchMovies } = useMovies();

  useEffect(() => {
    const initialSearch: MoviesSearch = { page, search: "Batman" }
    searchMovies(initialSearch)
  }, [])

  return (
    <div>
      <NavigationBar />
      <Layout>
        <MoviesRenderer movies={movies} />
      </Layout>

    </div>
  );
};

export default MoviesIndex;
