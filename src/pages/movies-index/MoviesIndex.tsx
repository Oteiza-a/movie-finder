import { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion';
import Layout from "../../components/layout/Layout";
import MoviesRenderer from "../../components/movies-renderer/MoviesRenderer";
import { useMovies } from "../../hooks/useMovies";
import { MoviesSearch } from "../../interfaces/MoviesSearch";
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';
import stylesVariables from "../../constants/stylesVariables";
import Empty from "../../components/empty/Empty";
import { transition } from "../../constants/transition";
import SearchBar from "../../components/search-bar/SearchBar";
import './MoviesIndex.css'

const MoviesIndex = (): JSX.Element => {
  const [search, setSearch] = useState("Batman");
  const [page, setPage] = useState<number>(1);
  const isMounted = useRef(false);
  
  const { movies, searchMovies, loading, totalResults } = useMovies();
  const maxPages = Math.ceil(totalResults / 10)
  
  useEffect(() => {
    if (isMounted.current) searchMovies({ page, search })
  }, [search, page]) // eslint-disable-line

  useEffect(() => {
    if (!movies.length) {
      const initialSearch: MoviesSearch = { page, search }
      searchMovies(initialSearch)
    }
    isMounted.current = true;
  }, []) // eslint-disable-line

  const onSearch = (searchValue: string) => {
    setPage(1);
    setSearch(searchValue);
  }

  const onPageChange = (newPage: number) => {
    window.scrollTo(0, 0)
    setPage(newPage)
  }

  const renderSearchBar = () => {
    return (
      <div className="search">
        <h3 className="mt-4 mb-3">Search movies and series!</h3>
        <SearchBar onSearch={onSearch}/>
      </div>
    )
  }

  const renderMovies = () => {
    if (!movies?.length && !loading) return <Empty text="No results found!" />
    return <MoviesRenderer movies={movies} loading={loading} />
  }

  const renderPaginator = () => {
    if (loading || totalResults === 0) return <></>

    const renderPrevBtn = page !== 1;
    const renderNextBtn = page !== maxPages;

    return (
      <div className="paginator">
        {renderPrevBtn 
          ? <button 
              className="button button--primary" 
              onClick={() => onPageChange(page - 1)}
            >
              <FiArrowLeftCircle size="20" color={stylesVariables.background}/>
              <span style={{ marginLeft: "5px" }}>Previous Page</span>
            </button>
          : <div></div>
        }
        {renderNextBtn
          ? <button 
              className="button button--primary" 
              onClick={() => onPageChange(page + 1) }
              disabled={page === maxPages}
            >
              <span style={{ marginRight: "5px" }}>Next Page</span>
              <FiArrowRightCircle size="20" color={stylesVariables.background}/>
            </button>
          : <div></div>
        }
      </div>
    )
  }

  return (
    <motion.div {...transition}>
      <Layout>
        {renderSearchBar()}
        {renderMovies()}
        {renderPaginator()}
      </Layout>
    </motion.div>
  );
};

export default MoviesIndex;
