import React from "react";
import { useTranslation } from 'react-i18next';
import { TestimonialsProps } from '../types';

export const Testimonials: React.FC<TestimonialsProps> = () => {
  const { t } = useTranslation();

  return (
    <div id="testimonials" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="testimonial-item bg-gray-50 p-8 rounded-lg shadow-md">
            <div className="testimonial-image mb-4 text-center">
              <img 
                src="img/testimonials/01.jpg" 
                alt="Client testimonial" 
                className="w-16 h-16 rounded-full mx-auto object-cover"
              />
            </div>
            <p className="text-gray-600 italic mb-4 text-center">
              "{t('testimonials.testimonial1.text')}"
            </p>
            <h4 className="text-lg font-semibold text-gray-800 text-center">
              {t('testimonials.testimonial1.name')}
            </h4>
          </div>
          
          <div className="testimonial-item bg-gray-50 p-8 rounded-lg shadow-md">
            <div className="testimonial-image mb-4 text-center">
              <img 
                src="img/testimonials/02.jpg" 
                alt="Client testimonial" 
                className="w-16 h-16 rounded-full mx-auto object-cover"
              />
            </div>
            <p className="text-gray-600 italic mb-4 text-center">
              "{t('testimonials.testimonial2.text')}"
            </p>
            <h4 className="text-lg font-semibold text-gray-800 text-center">
              {t('testimonials.testimonial2.name')}
            </h4>
          </div>
          
          <div className="testimonial-item bg-gray-50 p-8 rounded-lg shadow-md">
            <div className="testimonial-image mb-4 text-center">
              <img 
                src="img/testimonials/03.jpg" 
                alt="Client testimonial" 
                className="w-16 h-16 rounded-full mx-auto object-cover"
              />
            </div>
            <p className="text-gray-600 italic mb-4 text-center">
              "{t('testimonials.testimonial3.text')}"
            </p>
            <h4 className="text-lg font-semibold text-gray-800 text-center">
              {t('testimonials.testimonial3.name')}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}; 