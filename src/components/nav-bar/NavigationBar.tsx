import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { NavBarOption } from '../../interfaces/NavBarOption';
import Logo from '../logo/Logo';
import './NavigationBar.css'

interface NavigationBarProps {
  navOptions: NavBarOption[]
}

const NavigationBar = ({ navOptions }: NavigationBarProps) => {
  const location = useLocation();
  const { user } = useAuth();
  const [selected, setSelected] = useState<string>("");

  useEffect(() => {
    const selectedOption = navOptions.find(({ route }: NavBarOption) => route === location.pathname);
    if (selectedOption) setSelected(selectedOption.route);
  }, []) // eslint-disable-next-line
  
  const renderOptions = () => {
    return navOptions.map(({ title, route }: NavBarOption) => (
      <div className={`nav-bar__option ${route === selected ? "nav-bar__option--selected" : ""}`} key={title}>
        <Link className="nav-bar__option-link" to={route}>{title}</Link>
      </div>
    ))
  }

  const renderProfile = () => {
    return (
      <div className="nav-bar__profile">
        <div className="nav-bar__profile-info">
          <p className="margin-0" >{user.username}</p>
          <small className="margin-0 small-text">{user.email}</small>
        </div>
        <img src={user.image} className="nav-bar__profile-image" alt="profile"/>
      </div>
    )
  }

  return (
    <div>
      <nav className="nav-bar">
        <div className="nav-bar__elements">
          <div className="nav-bar__left-section">
            <Logo />
          </div>

          <div className="nav-bar__right-section">
            {renderOptions()}
            {renderProfile()}
          </div>

        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;