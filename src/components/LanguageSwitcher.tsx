import React from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcherProps } from '../types';

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className = '' }) => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string): void => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={`flex space-x-2 ${className}`}>
      <button
        onClick={() => changeLanguage('en')}
        className={`px-3 py-1 text-sm rounded transition-colors duration-300 ${
          i18n.language === 'en'
            ? 'bg-white text-primary font-semibold'
            : 'bg-transparent text-white border border-white hover:bg-white hover:text-primary'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('es')}
        className={`px-3 py-1 text-sm rounded transition-colors duration-300 ${
          i18n.language === 'es'
            ? 'bg-white text-primary font-semibold'
            : 'bg-transparent text-white border border-white hover:bg-white hover:text-primary'
        }`}
        aria-label="Cambiar a Español"
      >
        ES
      </button>
    </div>
  );
}; 