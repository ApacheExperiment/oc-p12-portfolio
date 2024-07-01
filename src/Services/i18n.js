import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importation des fichiers de traduction
import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';

// Les ressources de traduction
const resources = {
  en: {
    translation: translationEN
  },
  fr: {
    translation: translationFR
  }
};

i18n
  .use(initReactI18next) // Passer i18n instance to react-i18next
  .init({
    resources,
    lng: 'fr', // Langue par défaut
    fallbackLng: 'en', // Langue de secours

    interpolation: {
      escapeValue: false // React déjà fait la protection XSS
    }
  });

export default i18n;