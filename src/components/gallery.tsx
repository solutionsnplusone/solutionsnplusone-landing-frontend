import React from "react";
import { useTranslation } from 'react-i18next';
import { Image } from "./image";
import { GalleryProps } from '../types';

export const Gallery: React.FC<GalleryProps> = ({ data }) => {
  const { t } = useTranslation();

  return (
    <div id="portfolio" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('gallery.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('gallery.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.images?.map((image, index) => (
            <Image
              key={`gallery-image-${index}`}
              title={`Portfolio ${index + 1}`}
              largeImage={image.largeImage}
              smallImage={image.smallImage}
            />
          ))}
        </div>
      </div>
    </div>
  );
}; 