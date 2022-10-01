import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { NavBarOption } from '../../interfaces/NavBarOption';
import IconSignOut from '@iconscout/react-unicons/icons/uil-sign-out-alt'

import Logo from '../logo/Logo';
import './NavigationBar.css'
import stylesVariables from '../../constants/stylesVariables';

const navOptions: NavBarOption[] = [
  { title: "Home", route: "/movies" },
  { title: "Favorites", route: "/favorites" },
]

const NavigationBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [selected, setSelected] = useState<string>("");
  const [openProfile, setOpenProfile] = useState<boolean>(false)

  useEffect(() => {
    const selectedOption = navOptions.find(({ route }: NavBarOption) => route === location.pathname);
    if (selectedOption) setSelected(selectedOption.route);
  }, []) // eslint-disable-line
  
  const renderOptions = () => {
    return navOptions.map(({ title, route }: NavBarOption) => (
      <div 
        onClick={() => navigate(route)}
        className={`nav-bar__option ${route === selected ? "nav-bar__option--selected" : ""}`} 
        key={title}
      >
        <p className="nav-bar__option-link margin-0">{title}</p>
      </div>
    ))
  }

  const renderProfile = () => {
    return (
      <div className="nav-bar__profile" onClick={() => setOpenProfile(!openProfile)}>
        <div className="nav-bar__profile-info">
          <p className="margin-0" >{user.username}</p>
          <small className="margin-0 small-text">{user.email}</small>
        </div>
        <img src={user.image} className="nav-bar__profile-image" alt="profile"/>
        {openProfile 
          ? <div className="nav-bar__profile__popover">
              <button className="button button--primary" onClick={logout}>
                <span style={{ marginRight: "5px" }}>Logout</span>
                <IconSignOut size="20" color={stylesVariables.background}/>
              </button>
            </div>
          : <></>
        }
      </div>
    )
  }

  return (
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
  );
};

export default NavigationBar;