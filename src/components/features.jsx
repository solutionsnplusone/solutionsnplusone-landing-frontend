import React from "react";
import { useTranslation } from 'react-i18next';

export const Features = (props) => {
  const { t } = useTranslation();
  
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>{t('navigation.features')}</h2>
        </div>
        <div className="row">
          {t('features', { returnObjects: true }).map((feature, i) => (
            <div key={`${feature.title}-${i}`} className="col-xs-6 col-md-3">
              {" "}
              <i className={feature.icon}></i>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
