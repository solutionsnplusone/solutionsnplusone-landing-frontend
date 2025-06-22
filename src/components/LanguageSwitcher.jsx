import React from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <button
        className={`btn btn-sm ${i18n.language === 'en' ? 'btn-primary' : 'btn-outline-primary'}`}
        onClick={() => changeLanguage('en')}
        style={{ marginRight: '5px' }}
      >
        EN
      </button>
      <button
        className={`btn btn-sm ${i18n.language === 'es' ? 'btn-primary' : 'btn-outline-primary'}`}
        onClick={() => changeLanguage('es')}
      >
        ES
      </button>
    </div>
  );
}; 