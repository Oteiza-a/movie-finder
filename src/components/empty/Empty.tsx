import { FiFilm } from 'react-icons/fi';

import stylesVariables from '../../constants/stylesVariables';
import './Empty.css';

interface EmptyProps {
  text: string
}

const Empty = ({ text }: EmptyProps) => {
  return (
    <div className="empty">
      <div>
        <FiFilm size="50" color={stylesVariables.accent}/>
      </div>
      <h3 className="empty__text mt-2">{ text }</h3>
    </div>
  );
};

export default Empty;