import React from "react";
import { useTranslation } from 'react-i18next';

export const Testimonials = (props) => {
  const { t } = useTranslation();
  const testimonials = t('testimonials', { returnObjects: true });
  
  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-title">
          <h2 className="text-white">{t('testimonialsTitle')}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {props.data && testimonials
            ? props.data.map((asset, i) => (
                <div key={`testimonial-${i}`} className="testimonial-card animate-slide-up">
                  <div className="flex flex-col items-center mb-6">
                    <img 
                      src={asset.img} 
                      alt={testimonials[i]?.name} 
                      className="w-16 h-16 rounded-full object-cover mb-4"
                    />
                    <div className="text-center">
                      <p className="text-gray-700 italic mb-4 leading-relaxed">
                        {testimonials[i]?.text}
                      </p>
                      <div className="font-bold text-primary">
                        {testimonials[i]?.name}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </section>
  );
};
