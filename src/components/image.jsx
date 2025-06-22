import React from "react";

export const Image = ({ title, largeImage, smallImage }) => {
  return (
    <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
      <a href={largeImage} title={title} data-lightbox-gallery="gallery1">
        <div className="gallery-overlay">
          <div className="text-white text-center">
            <h4 className="text-xl font-bold">{title}</h4>
            <i className="fa fa-search text-2xl mt-2"></i>
          </div>
        </div>
        <img 
          src={smallImage} 
          className="w-full h-64 object-cover" 
          alt={title} 
        />
      </a>
    </div>
  );
};
