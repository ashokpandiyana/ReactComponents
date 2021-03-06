import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <div class="sidenav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
