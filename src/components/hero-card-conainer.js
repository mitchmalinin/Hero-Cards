import React from "react";
import HeroCard from "./hero-card";
import "./hero-card-conainer.css";

const HeroCardContainer = props => {
  return (
    <div className="card-container">
      {props.allHeros.map((hero, i) => {
        return <HeroCard key={i} hero={hero} />;
      })}
    </div>
  );
};

export default HeroCardContainer;
