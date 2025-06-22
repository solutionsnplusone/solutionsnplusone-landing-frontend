import React from "react";
import { useTranslation } from 'react-i18next';

export const Team = (props) => {
  const { t } = useTranslation();
  const team = t('team', { returnObjects: true });
  
  return (
    <section id="team" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-title">
          <h2>{t('teamTitle')}</h2>
          <p>{t('teamSubtitle')}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {props.data && team
            ? props.data.map((asset, i) => (
                <div key={`team-${i}`} className="team-card animate-slide-up">
                  <img 
                    src={asset.img} 
                    alt={team[i]?.name} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6 text-center">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{team[i]?.name}</h4>
                    <p className="text-primary font-medium">{team[i]?.job}</p>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </section>
  );
};
