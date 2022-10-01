import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavigationBar from "../../components/nav-bar/NavigationBar";
import { stringWithCommasToArray } from "../../helpers/strings";
import { useMovies } from "../../hooks/useMovies";
import { Rating } from "../../interfaces/Rating";
import IconStarRating from '@iconscout/react-unicons/icons/uil-envelope-star'
import IconArrowLeft from '@iconscout/react-unicons/icons/uil-arrow-circle-left'
import stylesVariables from "../../constants/stylesVariables";
import './MovieDetail.css'
import MovieDetailSkeleton from "../movie-detail-skeleton/MovieDetailSkeleton";

const MovieDetail = (): JSX.Element => {
  const params = useParams();
  const navigate = useNavigate();
  const { getMovieDetail, movieDetail } = useMovies();

  useEffect(() => {
    const movieId: string = params?.id || "";
    if (movieId) getMovieDetail(movieId);
  }, []) // eslint-disable-line

  const onGoBack = () => navigate(-1)

  const renderMovieDetail = () => {
    if (!movieDetail) return <></>

    const {  title, year, rated, released, runtime, genre, director, writer, actors, plot, 
      language, country, awards, poster, ratings, boxOffice } = movieDetail;

    const genres = stringWithCommasToArray(genre);
    const info = [
      { name: "Main cast", value: actors },
      { name: "Director", value: director },
      { name: "Writer", value: writer },
      { name: "Awards", value: awards },
      { name: "Box office", value: boxOffice },
      { name: "Country", value: country },
      { name: "Release date", value: released },
      { name: "Language", value: language },
    ]
    return (
      <div className="movie-detail">
        <div className="movie-detail__poster-section">
          
          <div className="movie-detail__poster-section-content">
            <div className="movie-detail__poster-wrapper">
              <img src={poster} alt="poster" className="movie-detail__poster" />
            </div>
            <div style={{ height: "fitContent" }}>
              <h1 className="movie-detail__poster-title">{title}</h1>
              <small className="small-text">{year} • {runtime} • {rated}</small>
              <div className="mt-2">{renderGenres(genres)}</div>
              <p>{plot}</p>
            </div>
          </div>
        </div>

        <div className="movie-detail__info-section">
          <div className="movie-detail__ratings mb-4">
            <h3 className="mt-0 mb-3">Ratings</h3>
            {renderRatings(ratings)}
          </div>
          <div>
            {info.map(({ name, value }) => renderMovieInfo(name, value))}
          </div>
          <div className="mt-3">
            <button className="button button--secondary" onClick={onGoBack}>
              <IconArrowLeft size="20" color={stylesVariables.accent}/>
              <span style={{ marginLeft: "5px" }}>Go back</span>
            </button>
          </div>
        </div>
      </div>
    )
  }

  const renderGenres = (genres: string[]): JSX.Element[] => {
    return genres.map((genre: string) => (
      <div className="genre" key={genre}>
        {genre}
      </div>
    ))
  }

  const renderRatings = (ratings: Rating[]) => {
    return (
      <div className="ratings">
        {ratings.map(({ source, value }: Rating) => (
          <div className="ratings__item" key={source}>
            <IconStarRating size="20" color={stylesVariables.accent}/>
            <p className="ratings__name">{source}</p>
            <h4 className="ratings__points">{value}</h4>
          </div>
        ))}
      </div>
    )
  }

  const renderMovieInfo = (name: string, value: string) => {
    if (!value) return <></>
    return (
      <div key={name}>
        <strong>{name}: </strong><span>{value}</span>
        <hr />
      </div>
    )
  }

  return (
    <div>
      <NavigationBar />
      {movieDetail ? renderMovieDetail() : <MovieDetailSkeleton />}
    </div>
  );
};

export default MovieDetail;
