import { useEffect, useState } from "react";
import Empty from "../../components/empty/Empty";
import Layout from "../../components/layout/Layout";
import MoviesRenderer from "../../components/movies-renderer/MoviesRenderer";
import NavigationBar from "../../components/nav-bar/NavigationBar";
import { useMovies } from "../../hooks/useMovies";
import { Movie } from "../../interfaces/Movie";

const Favorites = (): JSX.Element => {
  const { favoriteMovies } = useMovies();
  const [localFavoriteMovies, setLocalFavoriteMovies] = useState<Movie[]>([])

  useEffect(() => {
    setLocalFavoriteMovies(favoriteMovies);
  }, []) // eslint-disable-line

  return (
    <div>
      <NavigationBar />
      <Layout>
        <h2 className="mt-5 mb-2">Your favorite movies</h2>
        {favoriteMovies.length 
          ? <MoviesRenderer movies={localFavoriteMovies} />
          : <Empty text="Here you will see your favorite movies!" />
        }
      </Layout>
    </div>
  );
};

export default Favorites;
