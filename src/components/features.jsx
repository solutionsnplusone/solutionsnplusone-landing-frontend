import React from "react";
import { useTranslation } from 'react-i18next';

export const Features = (props) => {
  const { t } = useTranslation();
  
  return (
    <section id="features" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-title">
          <h2>{t('navigation.features')}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {t('features', { returnObjects: true }).map((feature, i) => (
            <div key={`${feature.title}-${i}`} className="feature-card animate-slide-up">
              <i className={`${feature.icon} text-4xl text-primary mb-4`}></i>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
