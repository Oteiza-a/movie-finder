import { getStylesVariable } from "../../helpers/documentStyles";
import "./Logo.css"

interface LogoProps {
  primaryColor?: string,
  secondaryColor?: string,
  fontSize?: string
}

const Logo = ({ primaryColor, secondaryColor, fontSize }: LogoProps): JSX.Element => {
  const color1 = primaryColor || getStylesVariable("--text-primary");
  const color2 = secondaryColor || getStylesVariable("--accent");
  
  return (
    <div className="logo">
      <h3 className="logo__text" style={{ color: color1, fontSize }}>Movie</h3>
      <h3 className="logo__text" style={{ color: color2 }}>Finder</h3>
    </div>
  );
};

export default Logo;