import React, { useState } from "react";
import "./user-input.css";
const UserInput = props => {
  const [userInput, setUserInput] = useState("");

  return (
    <div className="user-input-container">
      <div className="user-input-text">
        <h1>Enter Any Superhero</h1>
        <div className="user-input-feild">
          <input
            value={userInput}
            onChange={e => setUserInput(e.target.value)}
          ></input>
          <button onClick={e => props.addUserInput(userInput, e)}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserInput;
