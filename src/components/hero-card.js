import React, { useState } from "react";
import "./hero-card.css";
const HeroCard = props => {
  return (
    <div className="hero-card">
      <h1>{props.hero.name}</h1>
    </div>
  );
};

export default HeroCard;
