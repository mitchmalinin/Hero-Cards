import React from "react";
import HeroCard from "./hero-card";
import "./hero-card-conainer.css";
import useHttp from "../hooks/http";
import { useState, useEffect } from "react";

const HeroCardContainer = props => {
  const [errorMessage, setErrorMessage] = useState("");

  const [
    data,
    isLoading,
    error
  ] = useHttp(
    "https://www.superheroapi.com/api.php/10215492002188454/search/" +
      props.addedHero,
    [props.addedHero]
  );

  console.log("info from hero cont", data, isLoading);
  if (data && data.response === "error") {
    console.log("datatatataa", data.response);
    setErrorMessage(data.error);
  }

  useEffect(() => {
    props.updateHeroList(data);
  }, [props.addedHero, error]);

  if (error) {
    return <div className="error"> No hero found: {error.toString()}</div>;
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
