import { Image } from "./image";
import React from "react";
import { useTranslation } from 'react-i18next';

export const Gallery = (props) => {
  const { t } = useTranslation();
  
  return (
    <section id="portfolio" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-title">
          <h2>{t('navigation.gallery')}</h2>
          <p>{t('gallery.subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`project-${i}`}
                  className="gallery-item animate-slide-up"
                >
                  <Image
                    title={t('gallery.title')}
                    largeImage={d.largeImage}
                    smallImage={d.smallImage}
                  />
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </section>
  );
};
