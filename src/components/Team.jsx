import React from "react";
import { useTranslation } from 'react-i18next';

export const Team = (props) => {
  const { t } = useTranslation();
  const team = t('team', { returnObjects: true });
  
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div id="row">
          {props.data && team
            ? props.data.map((asset, i) => (
                <div key={`team-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    {" "}
                    <img src={asset.img} alt="..." className="team-img" />
                    <div className="caption">
                      <h4>{team[i]?.name}</h4>
                      <p>{team[i]?.job}</p>
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
