import React from "react";

import { Link, NavLink } from "react-router-dom";
import mainLogo from "../logo.svg";
const NavBar = () => {
  return (
    <nav className=" navbar navbar-expand-sm navbar-light ">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={mainLogo} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item ">
              <NavLink className="nav-link" to="/about">
                <b>A</b>
                bout
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/projects">
                <b>P</b>
                rojects
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to="/contact">
                <b>C</b>
                ontact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
