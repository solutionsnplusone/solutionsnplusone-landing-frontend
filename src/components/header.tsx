import React from "react";
import { useTranslation } from 'react-i18next';
import { HeaderProps } from '../types';

export const Header: React.FC<HeaderProps> = () => {
  const { t } = useTranslation();

  return (
    <header id="header" className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-primary to-primary-dark">
      <div className="absolute inset-0 bg-intro-bg bg-cover bg-center bg-no-repeat opacity-20" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="intro-text">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {t('header.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('header.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#features"
              className="btn-primary bg-white text-primary hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              {t('header.learnMore')}
            </a>
            <a
              href="#contact"
              className="btn-secondary border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105"
            >
              {t('header.getStarted')}
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#features" className="text-white text-2xl">
          <i className="fa fa-angle-down" />
        </a>
      </div>
    </header>
  );
}; 