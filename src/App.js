import React, { useState, useEffect } from "react";
import "./App.css";
import "./assets/styles.css";
import HeroCardContainer from "./components/hero-card-conainer";
import UserInput from "./components/user-input";
import useHttp from "./hooks/http";
import MyHeros from "./components/MyHeros";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
const App = () => {
  const [selectedHero, setSelectedHero] = useState("batman");
  const [heroList, setHeroList] = useState([]);

  const userInputHandler = (userInput, e) => {
    console.log("userInput", userInput);
    setSelectedHero(userInput);
  };

  const updateHeroList = (data) => {
    setHeroList((heroList) => [...heroList, data]);
    console.log("hero list", heroList);
  };

  useEffect(() => {
    console.log("heroList from app", heroList.flat(1));
  });

  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Switch>
          <Route
            exact
            path="/"
            component={(props) => (
              <div className="container-fluid">
                <UserInput {...props} addUserInput={userInputHandler} />
                <HeroCardContainer
                  {...props}
                  updateHeroList={updateHeroList}
                  addedHero={selectedHero}
                  heroList={heroList}
                />
              </div>
            )}
          />
          <Route
            path="/my-heros"
            component={(props) => <MyHeros {...props} />}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
