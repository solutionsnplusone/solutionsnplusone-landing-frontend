import React from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher flex space-x-2">
      <button
        className={`px-3 py-2 rounded-lg text-xl transition-all duration-300 transform hover:scale-110 ${
          i18n.language === 'en' 
            ? 'bg-white shadow-lg ring-2 ring-primary' 
            : 'bg-white bg-opacity-20 hover:bg-opacity-30'
        }`}
        onClick={() => changeLanguage('en')}
        title="English"
      >
        🇺🇸
      </button>
      <button
        className={`px-3 py-2 rounded-lg text-xl transition-all duration-300 transform hover:scale-110 ${
          i18n.language === 'es' 
            ? 'bg-white shadow-lg ring-2 ring-primary' 
            : 'bg-white bg-opacity-20 hover:bg-opacity-30'
        }`}
        onClick={() => changeLanguage('es')}
        title="Español"
      >
        🇪🇸
      </button>
    </div>
  );
}; 