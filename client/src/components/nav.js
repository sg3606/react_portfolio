import React from "react";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Navigation(props) {
  return (
    <div>
      <Navbar>
        <div className="navbar_0">
        <NavLink className="nav-link" to="/">
          <div class="text-light">
            <h4 class="nav-title-font">Shao Ge</h4>
          </div>
        </NavLink>
        </div>
        <div className="navbar_1">
        <ul class="navbar-nav">
          <li class="nav-item">
            <NavLink to="/about">
              <div class="nav-font">About</div>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/work">
              <div class="nav-font">Work</div>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/contact">
              <div class="nav-font">Contact</div>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/resume">
              <div class="nav-font">Resume</div>
            </NavLink>
          </li>
        </ul>
        </div>
      </Navbar>
    </div>
  );
}

export default Navigation;