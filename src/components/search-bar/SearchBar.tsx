import { useState } from 'react';
import TextInput from '../text-input/TextInput';
import { FiSearch } from 'react-icons/fi';
import stylesVariables from '../../constants/stylesVariables';
import './SearchBar.css';

interface CardProps {
  onSearch: (val: string) => void
}

const SearchBar = ({ onSearch }: CardProps) => {
  const [value, setValue] = useState<string>("")

  const onEnter = () => {
    onSearch(value);
    setValue("")
  }

  return (
    <div className="d-flex">
      <TextInput
        type="text"
        name="searchBar"
        placeholder="e.g. Kill Bill"
        maxLength={100}
        className="input"
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && onEnter() }
        value={value}
      />
      <button 
        className="button button--primary button--fit"
        onClick={() => onEnter()}
      >
        <FiSearch size="20" color={stylesVariables.background}/>
      </button>
    </div>
  );
};

export default SearchBar;