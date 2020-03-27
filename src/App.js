import React, { useState, useEffect } from "react";
import "./App.css";
import HeroCardContainer from "./components/hero-card-conainer";
import UserInput from "./components/user-input";
import useHttp from "./hooks/http";

const App = () => {
  const [selectedHero, setSelectedHero] = useState("batman");
  const [heroList, setHeroList] = useState([]);

  const userInputHandler = (userInput, e) => {
    console.log("userInput", userInput);
    setSelectedHero(userInput);
  };

  const updateHeroList = data => {
    setHeroList(heroList => [...heroList, data]);
  };

  useEffect(() => {
    console.log("heroList from app", heroList.flat(1));
  });

  return (
    <div className="App">
      <>
        <UserInput addUserInput={userInputHandler} />
        <HeroCardContainer
          updateHeroList={updateHeroList}
          addedHero={selectedHero}
          heroList={heroList}
        />
      </>
    </div>
  );
};

export default App;
