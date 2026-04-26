import React from "react";
import { useTranslation } from 'react-i18next';
import { TeamProps } from '../types';

export const Team: React.FC<TeamProps> = () => {
  const { t } = useTranslation();

  return (
    <div id="team" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('team.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('team.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="team-member text-center">
            <div className="team-img mb-4">
              <img 
                src="img/team/01.jpg" 
                alt="Team member" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              {t('team.member1.name')}
            </h4>
            <p className="text-gray-600">
              {t('team.member1.job')}
            </p>
          </div>
          
          <div className="team-member text-center">
            <div className="team-img mb-4">
              <img 
                src="img/team/02.jpg" 
                alt="Team member" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              {t('team.member2.name')}
            </h4>
            <p className="text-gray-600">
              {t('team.member2.job')}
            </p>
          </div>
          
          <div className="team-member text-center">
            <div className="team-img mb-4">
              <img 
                src="img/team/03.jpg" 
                alt="Team member" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              {t('team.member3.name')}
            </h4>
            <p className="text-gray-600">
              {t('team.member3.job')}
            </p>
          </div>
          
          <div className="team-member text-center">
            <div className="team-img mb-4">
              <img 
                src="img/team/04.jpg" 
                alt="Team member" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              {t('team.member4.name')}
            </h4>
            <p className="text-gray-600">
              {t('team.member4.job')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}; 