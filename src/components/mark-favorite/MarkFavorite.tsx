import IconFavorite from '@iconscout/react-unicons/icons/uil-favorite'
import stylesVariables from '../../constants/stylesVariables';
import './MarkFavorite.css'

interface Props {
  isActive: boolean
  onClick: () => void
}

const MarkFavorite = ({ isActive, onClick }: Props) => {
  const backgroundColor: string = stylesVariables.background
  const favoriteColor: string = stylesVariables.favorite
  const favoriteText = isActive ? "Favorite" : <>Mark as<br/>favorite</>;
  return (
    <div className={`mark-favorite ${isActive ? "mark-favorite--active" : ""}`} onClick={onClick}>
      <IconFavorite size="15" color={isActive ? backgroundColor : favoriteColor}/>
      <p className="mark-favorite__text">{favoriteText}</p>
    </div>
  );
};

export default MarkFavorite;