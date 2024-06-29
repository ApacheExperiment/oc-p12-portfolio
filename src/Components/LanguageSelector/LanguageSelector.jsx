import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './languageSelector.scss';
import iconTranslateReverse from '../../assets/img/icon/Reverse/icon-translate-Reverse.webp';
import iconTranslate from '../../assets/img/icon/Initial/icon-translate.webp';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Hook pour détecter les changements du mode sombre
  useEffect(() => {
    const matchMedia = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e) => {
      setIsDarkMode(e.matches);
    };

    setIsDarkMode(matchMedia.matches);
    matchMedia.addEventListener('change', handleChange);

    return () => {
      matchMedia.removeEventListener('change', handleChange);
    };
  }, []);

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className="Translate__wrap">
      <button className="Translate__buttons" onClick={toggleLanguage}>
        <img src={isDarkMode ? iconTranslate : iconTranslateReverse} 
        alt="icon de traduction"
        className="Translate__icon"/>
        {i18n.language === 'fr' ? 'FR' : 'EN'}
      </button>
    </div>
  );
};

export default LanguageSelector;