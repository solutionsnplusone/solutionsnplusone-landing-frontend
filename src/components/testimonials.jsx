import React from "react";
import { useTranslation } from 'react-i18next';

export const Testimonials = (props) => {
  const { t } = useTranslation();
  const testimonials = t('testimonials', { returnObjects: true });
  
  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>What our clients say</h2>
        </div>
        <div className="row">
          {props.data && testimonials
            ? props.data.map((asset, i) => (
                <div key={`testimonial-${i}`} className="col-md-4">
                  <div className="testimonial">
                    <div className="testimonial-image">
                      {" "}
                      <img src={asset.img} alt="" />{" "}
                    </div>
                    <div className="testimonial-content">
                      <p>{testimonials[i]?.text}</p>
                      <div className="testimonial-meta"> - {testimonials[i]?.name} </div>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
