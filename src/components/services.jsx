import React from "react";
import { useTranslation } from 'react-i18next';

export const Services = (props) => {
  const { t } = useTranslation();
  
  return (
    <section id="services" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-title">
          <h2>{t('services.title')}</h2>
          <p>{t('services.subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t('services.items', { returnObjects: true }).map((service, i) => (
            <div key={`${service.name}-${i}`} className="service-card animate-slide-up">
              <i className={`${service.icon} text-4xl text-primary mb-6`}></i>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{service.name}</h3>
              <p className="text-gray-600 leading-relaxed">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
