import React, { ReactNode } from "react";
import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";
import './MovieDetailSkeleton.css'

const MovieDetailSkeleton = (): JSX.Element => {
  const renderSkeletons = (element: ReactNode, quantity: number) => {
    return Array.from(Array(quantity).keys()).map((index) => (
      <React.Fragment key={index}>
        {element}
      </React.Fragment>
    ))
  }

  return (
    <div className="movie-detail-skeleton">
      <div className="movie-detail__poster-section">
        <div className="movie-detail__poster-section-content">
          <Skeleton className="movie-card-skeleton__poster"/>
          <Skeleton width="60%"/>
          <Skeleton height={30} className="mb-2"/>
          {renderSkeletons(<Skeleton />, 6)}
        </div>
      </div>
      <div className="movie-detail-skeleton__info-section">
        <div>
          {renderSkeletons(
            <div className="mb-4">
              <Skeleton className="mb-2" />
              <hr />
            </div>,
            5
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetailSkeleton;
