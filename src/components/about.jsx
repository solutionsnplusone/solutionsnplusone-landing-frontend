import React from "react";
import { useTranslation } from 'react-i18next';

export const About = (props) => {
  const { t } = useTranslation();
  
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>{t('navigation.about')}</h2>
              <p>{t('about.paragraph')}</p>
              <h3>{t('about.whyChooseUs')}</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {t('about.why', { returnObjects: true }).map((item, i) => (
                      <li key={`${item}-${i}`}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {t('about.why2', { returnObjects: true }).map((item, i) => (
                      <li key={`${item}-${i}`}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
