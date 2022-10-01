import { render, screen, fireEvent } from '@testing-library/react';
import MoviesProvider from '../../../context/movies/MoviesProvider';
import { movie } from '../../../mocks/movie';
import MovieCard from '../MovieCard';

const mockOnSeeMore = jest.fn();

describe("MovieCard", () => {
  test("should render movie card with title and see more button", () => {
    render(
      <MoviesProvider>
        <MovieCard movie={movie} onSeeMore={mockOnSeeMore}/>
      </MoviesProvider>
    )
    const movieTitleElement = screen.getByRole("heading", { name: movie.title })
    expect(movieTitleElement).toBeInTheDocument();
  })

  // test("should activate favorite button on click", () => {
  //   render(
  //     <AuthProvider>
  //       <MovieCard movie={movie} onSeeMore={mockOnSeeMore}/>
  //     </AuthProvider>
  //   )
  //   const favoriteButtonElement = screen.getByRole("button", { name: /add/i })



  // })
})