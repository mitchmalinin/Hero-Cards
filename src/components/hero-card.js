import React, { useState } from "react";
import "./hero-card.css";
const HeroCard = props => {
  return (
    <div
      id={props.hero.id}
      className="hero-card"
      onClick={() => props.updateHeroList(props.hero)}
    >
      <div
        className="img-container"
        style={{ backgroundImage: `url(${props.hero.image.url})` }}
      ></div>
      <h1>{props.hero.name}</h1>
      <div className="power-stats">
        <li>
          <h3>intelligence</h3>
          <span className="bar">
            <span
              className="intelligence"
              style={{ width: `${props.hero.powerstats.intelligence}%` }}
            ></span>
          </span>
        </li>
        <li>
          <h3>strength</h3>
          <span className="bar">
            <span
              className="strength"
              style={{ width: `${props.hero.powerstats.strength}%` }}
            ></span>
          </span>
        </li>
        <li>
          <h3>speed</h3>
          <span className="bar">
            <span
              className="speed"
              style={{ width: `${props.hero.powerstats.speed}%` }}
            ></span>
          </span>
        </li>
        <li>
          <h3>durability</h3>
          <span className="bar">
            <span
              className="durability"
              style={{ width: `${props.hero.powerstats.durability}%` }}
            ></span>
          </span>
        </li>
        <li>
          <h3>power</h3>
          <span className="bar">
            <span
              className="power"
              style={{ width: `${props.hero.powerstats.power}%` }}
            ></span>
          </span>
        </li>
        <li>
          <h3>combat</h3>
          <span className="bar">
            <span
              className="combat"
              style={{ width: `${props.hero.powerstats.combat}%` }}
            ></span>
          </span>
        </li>
      </div>
    </div>
  );
};

export default HeroCard;
