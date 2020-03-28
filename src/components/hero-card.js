import React, { useState } from "react";
import "./hero-card.css";
const HeroCard = props => {
  return (
    <div className="hero-card">
      <div
        className="img-container"
        style={{ backgroundImage: `url(${props.hero.image.url})` }}
      ></div>
      <h1>{props.hero.name}</h1>
    </div>
  );
};

export default HeroCard;
