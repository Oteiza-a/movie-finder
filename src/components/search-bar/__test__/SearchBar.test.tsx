import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from '../SearchBar';

const mockOnSearch = jest.fn();

const getSearchInput = () => screen.getByPlaceholderText(/e.g. Kill Bill/i) as HTMLInputElement;
const getSearchButton = () => screen.getByRole("button") as HTMLInputElement;

describe("SearchBar", () => {
  test("should render empty search bar", () => {
    render(
      <SearchBar onSearch={mockOnSearch} />
    )

    const searchInputElement = getSearchInput();    
    expect(searchInputElement.value).toBe("");
  })

  test("search input should have value entered by the user", () => {
    render(
      <SearchBar onSearch={mockOnSearch} />
    )

    const searchInputElement = getSearchInput();    
    userEvent.type(searchInputElement, "Kill Bill")

    expect(searchInputElement.value).toBe("Kill Bill");
  })

  test("should clear input value when clicking on search button", () => {
    render(
      <SearchBar onSearch={mockOnSearch} />
    )

    const searchInputElement = getSearchInput();    
    const searchButtonElement = getSearchButton();

    userEvent.type(searchInputElement, "Kill Bill")
    userEvent.click(searchButtonElement);

    expect(searchInputElement.value).toBe("");
  })

  test("should clear input when pressing enter after typing on the search bar", () => {
    render(
      <SearchBar onSearch={mockOnSearch} />
    )

    const searchInputElement = getSearchInput();

    userEvent.type(searchInputElement, "Kill Bill")
    userEvent.type(searchInputElement, "{enter}")

    expect(searchInputElement.value).toBe("");
  })
})