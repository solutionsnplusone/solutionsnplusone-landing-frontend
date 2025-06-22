import React from "react";
import { useTranslation } from 'react-i18next';

export const Header = (props) => {
  const { t } = useTranslation();
  
  return (
    <header id="header" className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content animate-fade-in">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-slide-down">
            {t('header.title')}
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto animate-slide-up">
            {t('header.paragraph')}
          </p>
          <a
            href="#features"
            className="btn-primary inline-block animate-slide-up"
          >
            {t('header.learnMore')}
          </a>
        </div>
      </div>
    </header>
  );
};
