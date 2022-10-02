import { ChangeEvent, useRef, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import stylesVariables from '../../constants/stylesVariables';
import { useMovies } from '../../hooks/useMovies';
import './SearchBar.css';

interface CardProps {
  onSearch: (val: string) => void
}

const SearchBar = ({ onSearch }: CardProps) => {
  const { typeaheadSuggestions, getSuggestions } = useMovies();
  const [value, setValue] = useState<string>("")
  const timeoutRef = useRef<any>(null);
  const inputRef = useRef<any>(null);

  const onType = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    setValue(inputValue)

    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      if (inputValue) getSuggestions(inputValue)
    }, 1300)
  }

  const onEnter = (suggestion?: string) => {
    onSearch(suggestion || value);
    setValue("")
  }

  const renderSuggestions = () => {
    if (!(document.activeElement === inputRef.current)) return <></>

    return (
      <div className="typeahead">
        {typeaheadSuggestions.map((suggestion: string) => (
          <div 
            className="typeahead__suggestion" 
            onClick={() => onEnter(suggestion) }
            key={suggestion}
          >
            {suggestion}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        name="searchBar"
        placeholder="e.g. Kill Bill"
        maxLength={100}
        className="input"
        onChange={onType}
        onKeyDown={(e) => e.key === 'Enter' && onEnter() }
        value={value}
        autoComplete="off"
        ref={inputRef}
      />
      <button 
        className="button button--primary button--fit"
        onClick={() => onEnter()}
        disabled={!value}
      >
        <FiSearch size="20" color={stylesVariables.background}/>
      </button>

      {renderSuggestions()}
    </div>
  );
};

export default SearchBar;