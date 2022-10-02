import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MoviesProvider from '../../../context/movies/MoviesProvider';
import { movie } from '../../../mocks/movie';
import MovieCard from '../MovieCard';

const mockOnSeeMore = jest.fn();

const MockMovieCard = () => (
  <MoviesProvider>
    <MovieCard movie={movie} onSeeMore={mockOnSeeMore}/>
  </MoviesProvider>
)

describe("MovieCard", () => {
  test("should render movie card with title and see more button", () => {
    render(
      <MockMovieCard />
    )
    const movieTitleElement = screen.getByRole("heading", { name: movie.title })
    const seeMoreButtonElement = screen.getByRole("button", { name: /see more/i })

    expect(movieTitleElement).toBeInTheDocument();
    expect(seeMoreButtonElement).toBeInTheDocument();
  })

  test("should activate favorite button on click", () => {
    render(
      <MockMovieCard />
    )
    const favoriteButtonElement = screen.getByText(/Mark as/);

    userEvent.click(favoriteButtonElement);

    expect(favoriteButtonElement).toHaveTextContent("Favorite");
    expect(favoriteButtonElement).not.toHaveTextContent(/Mark as/);
  })
})