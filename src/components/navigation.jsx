import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';
import { assets } from '../config/assets';

export const Navigation = (props) => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 left-0 right-0 bg-primary shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <a href="#page-top" className="navbar-brand">
              <img 
                src={assets.logo} 
                alt="Solutions N+1 Logo" 
                className="h-8 w-auto mr-3"
              />
              <span className="hidden sm:block">{t('navigation.brand')}</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#features" className="nav-link">
              {t('navigation.features')}
            </a>
            <a href="#about" className="nav-link">
              {t('navigation.about')}
            </a>
            <a href="#services" className="nav-link">
              {t('navigation.services')}
            </a>
            <a href="#portfolio" className="nav-link">
              {t('navigation.gallery')}
            </a>
            <a href="#testimonials" className="nav-link">
              {t('navigation.testimonials')}
            </a>
            <a href="#team" className="nav-link">
              {t('navigation.team')}
            </a>
            <a href="#contact" className="nav-link">
              {t('navigation.contact')}
            </a>
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-200 focus:outline-none focus:text-gray-200 transition-colors duration-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-primary-dark">
              <a 
                href="#features" 
                className="block px-3 py-2 text-white hover:text-gray-200 hover:bg-primary-light rounded-md transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navigation.features')}
              </a>
              <a 
                href="#about" 
                className="block px-3 py-2 text-white hover:text-gray-200 hover:bg-primary-light rounded-md transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navigation.about')}
              </a>
              <a 
                href="#services" 
                className="block px-3 py-2 text-white hover:text-gray-200 hover:bg-primary-light rounded-md transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navigation.services')}
              </a>
              <a 
                href="#portfolio" 
                className="block px-3 py-2 text-white hover:text-gray-200 hover:bg-primary-light rounded-md transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navigation.gallery')}
              </a>
              <a 
                href="#testimonials" 
                className="block px-3 py-2 text-white hover:text-gray-200 hover:bg-primary-light rounded-md transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navigation.testimonials')}
              </a>
              <a 
                href="#team" 
                className="block px-3 py-2 text-white hover:text-gray-200 hover:bg-primary-light rounded-md transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navigation.team')}
              </a>
              <a 
                href="#contact" 
                className="block px-3 py-2 text-white hover:text-gray-200 hover:bg-primary-light rounded-md transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navigation.contact')}
              </a>
              <div className="px-3 py-2">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
