import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
const Nav = props => {
  return (
    <nav>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/my-heros">My Heros</Link>
      </li>
    </nav>
  );
};

export default Nav;
