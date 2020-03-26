import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import HeroCardContainer from "./components/hero-card-conainer";

const App = () => {
  // //states
  const [heros, setHeros] = useState([]);
  const [isLoading, setLoading] = useState(true);

  //sample data
  const sampleHeroData = ["batman", "flash"];

  const fetchData = () => {
    sampleHeroData.forEach(async hero => {
      let response = await fetch(
        `https://www.superheroapi.com/api.php/10215492002188454/search/${hero}`
      );
      let data = await response.json();
      setHeros(heros => [...heros, data.results]);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log("hero list", heros);

  return (
    <div className="App">
      {isLoading ? (
        <div>Loading....</div>
      ) : (
        <HeroCardContainer allHeros={heros.flat(1)} />
      )}
    </div>
  );
};

export default App;
