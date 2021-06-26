import React from "react";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Navigation(props) {
  return (
    <div>
      <Navbar>
        <div className="navbar_0">
        <NavLink className="nav-link" to="/">
          <div className="text-light">
            <h4 className="nav-title-font">Shao Ge</h4>
          </div>
        </NavLink>
        </div>
        <div className="navbar_1">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/about">
              <div className="nav-font">About</div>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/work">
              <div className="nav-font">Work</div>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact">
              <div className="nav-font">Contact</div>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/resume">
              <div className="nav-font">Resume</div>
            </NavLink>
          </li>
        </ul>
        </div>
      </Navbar>
    </div>
  );
}

export default Navigation;