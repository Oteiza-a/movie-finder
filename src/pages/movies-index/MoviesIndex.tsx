import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import NavigationBar from "../../components/nav-bar/NavigationBar";
import { useMovies } from "../../hooks/useMovies";
import { MoviesSearch } from "../../interfaces/MoviesSearch";
import { NavBarOption } from "../../interfaces/NavBarOption";
import MoviesRenderer from "./movies-renderer/MoviesRenderer";

const MoviesIndex = (): JSX.Element => {
  const [page, setPage] = useState(1);
  const { movies, searchMovies } = useMovies();

  useEffect(() => {
    const initialSearch: MoviesSearch = { page, search: "Batman" }
    searchMovies(initialSearch)
  }, [])

  const navOptions: NavBarOption[] = [
    { title: "Home", route: "/movies" },
    { title: "Favorites", route: "/favorites" },
  ]

  return (
    <div>
      <NavigationBar navOptions={navOptions}/>
      <Layout>
        <MoviesRenderer movies={movies} />
      </Layout>

    </div>
  );
};

export default MoviesIndex;
