import React from "react";
import { useTranslation } from 'react-i18next';
import { ServicesProps } from '../types';

export const Services: React.FC<ServicesProps> = () => {
  const { t } = useTranslation();

  return (
    <div id="services" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="service-item text-center p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <div className="service-icon mb-6">
              <i className="fa fa-code text-5xl text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {t('services.webDevelopment.title')}
            </h3>
            <p className="text-gray-600">
              {t('services.webDevelopment.description')}
            </p>
          </div>
          
          <div className="service-item text-center p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <div className="service-icon mb-6">
              <i className="fa fa-mobile text-5xl text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {t('services.mobileDevelopment.title')}
            </h3>
            <p className="text-gray-600">
              {t('services.mobileDevelopment.description')}
            </p>
          </div>
          
          <div className="service-item text-center p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <div className="service-icon mb-6">
              <i className="fa fa-cogs text-5xl text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {t('services.consulting.title')}
            </h3>
            <p className="text-gray-600">
              {t('services.consulting.description')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}; 