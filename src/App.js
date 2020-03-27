import React, { useState, useEffect } from "react";
import "./App.css";
import HeroCardContainer from "./components/hero-card-conainer";
import UserInput from "./components/user-input";
import useHttp from "./hooks/http";

const App = () => {
  const [selectedHero, setSelectedHero] = useState("batman");
  const [heroList, setHeroList] = useState();
  // const [isLoading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  // const [userInput, setUserInput] = useState(["batman"]);

  let sampleCards = ["flash", "batman"];

  const userInputHandler = (userInput, e) => {
    console.log("userInput", userInput);
    setSelectedHero(userInput);
  };

  // const addHeroToList = hero => {
  //   setHeroList(heroList => [...heroList, hero]);
  //   console.log("hero from input", hero);
  // };

  // useEffect(() => {
  //   sampleCards.forEach(async hero => {
  //     try {
  //       let response = await fetch(
  //         `https://www.superheroapi.com/api.php/10215492002188454/search/${hero}`
  //       );
  //       let data = await response.json();
  //       setLoading(false);
  //       setHeroList(heroList => [...heroList, data.results]);
  //     } catch (err) {
  //       setError(err);
  //     }
  //   });
  // }, [heroList]);

  // if (error) {
  //   return <div className="error">{error.toString()}</div>;
  // }

  return (
    <div className="App">
      <>
        <UserInput addUserInput={userInputHandler} />
        <HeroCardContainer addedHero={selectedHero} />
      </>
    </div>
  );
};

export default App;
