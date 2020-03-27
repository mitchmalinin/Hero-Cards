import React from "react";
import HeroCard from "./hero-card";
import "./hero-card-conainer.css";
import useHttp from "../hooks/http";
import { useEffect } from "react";

const HeroCardContainer = props => {
  const [
    data,
    isLoading,
    error
  ] = useHttp(
    "https://www.superheroapi.com/api.php/10215492002188454/search/" +
      props.addedHero,
    [props.addedHero]
  );

  useEffect(() => {
    props.updateHeroList(data);
  }, [props.addedHero]);

  if (error) {
    return <div className="error">{error.toString()}</div>;
  }

  return (
    <div className="card-container">
      {!isLoading && data ? (
        data.map((hero, i) => {
          return <HeroCard key={i} hero={hero} />;
        })
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default HeroCardContainer;
