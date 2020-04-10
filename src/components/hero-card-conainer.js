import React from "react";
import HeroCard from "./hero-card";
import useHttp from "../hooks/http";
import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";

const HeroCardContainer = (props) => {
  const [errorMessage, setErrorMessage] = useState("");

  const [
    data,
    isLoading,
    error,
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

  if (error) {
    return <div className="error"> No hero found: {error.toString()}</div>;
  }

  return (
    <div className="card-container">
      {!isLoading && data ? (
        data.map((hero, i) => {
          return (
            <HeroCard
              key={i}
              hero={hero}
              updateHeroList={props.updateHeroList}
            />
          );
        })
      ) : (
        <div className="spinner-icon">
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      )}
    </div>
  );
};

export default HeroCardContainer;
