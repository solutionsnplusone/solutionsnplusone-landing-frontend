import React from "react";
import { useTranslation } from 'react-i18next';

export const About = (props) => {
  const { t } = useTranslation();
  
  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <img 
              src="img/about.jpg" 
              className="w-full h-auto rounded-xl shadow-lg" 
              alt="About Solutions N+1" 
            />
          </div>
          <div className="animate-slide-up">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">{t('navigation.about')}</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">{t('about.paragraph')}</p>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('about.whyChooseUs')}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <ul className="space-y-3">
                  {t('about.why', { returnObjects: true }).map((item, i) => (
                    <li key={`${item}-${i}`} className="flex items-center text-gray-700">
                      <i className="fa fa-check-circle text-primary mr-3"></i>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <ul className="space-y-3">
                  {t('about.why2', { returnObjects: true }).map((item, i) => (
                    <li key={`${item}-${i}`} className="flex items-center text-gray-700">
                      <i className="fa fa-check-circle text-primary mr-3"></i>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
