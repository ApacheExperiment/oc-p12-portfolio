import React from 'react';
import { useTranslation } from 'react-i18next';
import './languageSelector.scss';
import iconTranslate from '../../assets/img/icon/icon-translate3.png';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className="Translate__wrap">
      <button className="Translate__buttons" onClick={toggleLanguage}>
        <img src={iconTranslate}
        alt="icon de traduction"
        className="Translate__icon"/>
        {i18n.language === 'fr' ? 'FR' : 'EN'}
      </button>
    </div>
  );
};

export default LanguageSelector;