import React from "react";
import { useTranslation } from 'react-i18next';
import { FeaturesProps } from '../types';

export const Features: React.FC<FeaturesProps> = () => {
  const { t } = useTranslation();

  return (
    <div id="features" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('features.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="feature-item text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <div className="feature-icon mb-4">
              <i className="fa fa-cogs text-4xl text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {t('features.feature1.title')}
            </h3>
            <p className="text-gray-600">
              {t('features.feature1.description')}
            </p>
          </div>

          {/* Feature 2 */}
          <div className="feature-item text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <div className="feature-icon mb-4">
              <i className="fa fa-rocket text-4xl text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {t('features.feature2.title')}
            </h3>
            <p className="text-gray-600">
              {t('features.feature2.description')}
            </p>
          </div>

          {/* Feature 3 */}
          <div className="feature-item text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <div className="feature-icon mb-4">
              <i className="fa fa-shield text-4xl text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {t('features.feature3.title')}
            </h3>
            <p className="text-gray-600">
              {t('features.feature3.description')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}; 