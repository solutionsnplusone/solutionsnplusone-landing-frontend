import React from "react";
import { useTranslation } from 'react-i18next';
import { AboutProps } from '../types';

export const About: React.FC<AboutProps> = () => {
  const { t } = useTranslation();

  return (
    <div id="about" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="img/about.jpg" 
              alt="About Solutions N+1" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              {t('about.title')}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t('about.paragraph')}
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {t('about.whyChooseUs')}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fa fa-check text-primary mt-1 mr-3" />
                    <span className="text-gray-600">{t('about.reason1')}</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fa fa-check text-primary mt-1 mr-3" />
                    <span className="text-gray-600">{t('about.reason2')}</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fa fa-check text-primary mt-1 mr-3" />
                    <span className="text-gray-600">{t('about.reason3')}</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fa fa-check text-primary mt-1 mr-3" />
                    <span className="text-gray-600">{t('about.reason4')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 