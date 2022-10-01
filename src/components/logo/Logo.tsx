import stylesVariables from "../../constants/stylesVariables";
import "./Logo.css"

interface LogoProps {
  primaryColor?: string,
  secondaryColor?: string,
  fontSize?: string
}

const Logo = ({ primaryColor, secondaryColor, fontSize }: LogoProps): JSX.Element => {
  const color1 = primaryColor || stylesVariables.textPrimary;
  const color2 = secondaryColor || stylesVariables.accent;
  
  return (
    <div className="logo">
      <h3 className="logo__text" style={{ color: color1, fontSize }}>Movie</h3>
      <h3 className="logo__text" style={{ color: color2, fontSize}}>Finder</h3>
    </div>
  );
};

export default Logo;