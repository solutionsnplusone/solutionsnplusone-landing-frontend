import React from "react";
import { useTranslation } from 'react-i18next';

export const Services = (props) => {
  const { t } = useTranslation();
  
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>{t('services.title')}</h2>
          <p>{t('services.subtitle')}</p>
        </div>
        <div className="row">
          {t('services.items', { returnObjects: true }).map((service, i) => (
            <div key={`${service.name}-${i}`} className="col-md-4">
              {" "}
              <i className={service.icon}></i>
              <div className="service-desc">
                <h3>{service.name}</h3>
                <p>{service.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
