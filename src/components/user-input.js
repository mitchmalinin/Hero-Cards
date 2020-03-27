import React, { useState } from "react";
import "./user-input.css";
import useHook from "../hooks/http";
const UserInput = props => {
  const [userInput, setUserInput] = useState("");
  //   const [data, isLoading, error] = useHook(`https://www.superheroapi.com/api.php/10215492002188454/search/${userInput}`,[]);

  return (
    <div className="user-input-container">
      <h1>Enter Any Superhero!</h1>
      <input
        placeholder="spiderman..."
        value={userInput}
        onChange={e => setUserInput(e.target.value)}
      ></input>
      <button onClick={e => props.addUserInput(userInput, e)}>Submit</button>
    </div>
  );
};

export default UserInput;
