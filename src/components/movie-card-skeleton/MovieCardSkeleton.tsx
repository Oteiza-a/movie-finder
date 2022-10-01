import Skeleton from 'react-loading-skeleton';
import "./MovieCardSkeleton.css"
import "react-loading-skeleton/dist/skeleton.css";

const MovieCardSkeleton = () => {
  return (
    <div className="movie-card-skeleton">
      <div className="movie-card-skeleton__content">
        <Skeleton className="movie-card-skeleton__poster"/>
        <Skeleton height={30} className="mb-2"/>
        <Skeleton width="60%"/>
        <div className="movie-card-skeleton__options">
          <Skeleton width="150px" height="30px"/>
        </div>
      </div>
    </div>
  );
};

export default MovieCardSkeleton;