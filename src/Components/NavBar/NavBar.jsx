import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './NavBar.scss';
import { useTranslation } from 'react-i18next';

const NavBar = ({ active }) => {
  const { t } = useTranslation();

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

  return (
    <div className="navContainer">
      <nav className="navBar">
        <div className="navBackground">
          <ul className="navList">
            <li className={activeItem === 'home' ? 'navItem active' : 'navItem'}>
              <Link to="#home" onClick={() => handleClick('#home')}>{t('navbarWelcome')}</Link>
            </li>
            <li className={activeItem === 'projects' ? 'navItem active' : 'navItem'}>
              <Link to="#projects" onClick={() => handleClick('#projects')}>{t('navbarProjects')}</Link>
            </li>
            <li className={activeItem === 'skills' ? 'navItem active' : 'navItem'}>
              <Link to="#skills" onClick={() => handleClick('#skills')}>{t('navbarSkills')}</Link>
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

