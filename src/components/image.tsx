import React from "react";
import { ImageProps } from '../types';

export const Image: React.FC<ImageProps> = ({ title, largeImage, smallImage }) => {
  return (
    <div className="portfolio-item group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <a href={largeImage} title={title} data-lightbox-gallery="gallery1">
        <div className="relative">
          <img 
            src={smallImage} 
            alt={title}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-primary bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
            <i className="fa fa-search-plus text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </a>
    </div>
  );
}; 