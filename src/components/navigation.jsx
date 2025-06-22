import React from "react";
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Navigation = (props) => {
  const { t } = useTranslation();
  
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            {t('navigation.brand')}
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                {t('navigation.features')}
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                {t('navigation.about')}
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                {t('navigation.services')}
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                {t('navigation.gallery')}
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                {t('navigation.testimonials')}
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                {t('navigation.team')}
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                {t('navigation.contact')}
              </a>
            </li>
            <li style={{ paddingLeft: '10px' }}>
              <LanguageSwitcher />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
