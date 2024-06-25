import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './NavBar.scss';
/*import Logout from '../../assets/img/icon/Initial/icon-logout.png';
import Login from '../../assets/img/icon/Reverse/icon-login.png';
import { useAuth } from '../../Service/AuthContext';*/

const NavBar = ({ active }) => {
  const [activeItem, setActiveItem] = useState(active);
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash || '#home';
    if (hash) {
      setActiveItem(hash.substring(1));
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const handleClick = (hash) => {
    setActiveItem(hash.substring(1));
    const element = document.getElementById(hash.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  //const { isAuthenticated, logout } = useAuth();

  return (
    <div className="navContainer">
      <nav className="navBar">
        <div className="navBackground">
          <ul className="navList">
            <li className={activeItem === 'home' ? 'navItem active' : 'navItem'}>
              <Link to="#home" onClick={() => handleClick('#home')}>Accueil</Link>
            </li>
            <li className={activeItem === 'projects' ? 'navItem active' : 'navItem'}>
              <Link to="#projects" onClick={() => handleClick('#projects')}>Projets</Link>
            </li>
            {/*<li className="authIcons">
              {isAuthenticated ? (
                <img
                  src={Login}
                  alt="Login icon"
                  width={20}
                  height={20}
                  className="iconLog"
                  onClick={logout}
                />
              ) : (
                <a href="/login">
                  <img
                    src={Logout}
                    alt="Logout icon"
                    width={20}
                    height={20}
                    className="iconLog"
                  />
                </a>
              )}
            </li>*/}
            <li className={activeItem === 'skills' ? 'navItem active' : 'navItem'}>
              <Link to="#skills" onClick={() => handleClick('#skills')}>Compétences</Link>
            </li>
            <li className={activeItem === 'contact' ? 'navItem active' : 'navItem'}>
              <Link to="#contact" onClick={() => handleClick('#contact')}>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

