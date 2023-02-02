import React from 'react';
// import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import './navigate.css';

const NavBar = ({ navTag }) => {
  switch (navTag) {
    case 1: // Home
      return (
        <div>
          <ul className="navigation homeNavigation">
            <li className="active">Home</li>
            <li>Apps</li>
            <li><a href="/publications">Projects & Publications</a></li>
            <li><a href="/about">About Me</a></li>
            <li><a href="/contact">Contact Me</a></li>
          </ul>
        </div>
      );
    case 2: // Apps
      return (
        <div>
          <ul className="navigation">
            <li><a href="/">Home</a></li>
            <li className="active">Apps</li>
            <li><a href="/publications">Projects & Publications</a></li>
            <li><a href="/about">About Me</a></li>
            <li><a href="/contact">Contact Me</a></li>
          </ul>
        </div>
      );
    case 3: // Publications
      return (
        <div>
          <ul className="navigation">
            <li><a href="/">Home</a></li>
            <li>Apps</li>
            <li className="active">Projects & Publications</li>
            <li><a href="/about">About Me</a></li>
            <li><a href="/contact">Contact Me</a></li>
          </ul>
        </div>
      );
    case 4: // About Me
      return (
        <div>
          <ul className="navigation">
            <li><a href="/">Home</a></li>
            <li>Apps</li>
            <li><a href="/publications">Projects & Publications</a></li>
            <li className="active">About Me</li>
            <li><a href="/contact">Contact Me</a></li>
          </ul>
        </div>
      );
    case 5: // Contact Me
      return (
        <div>
          <ul className="navigation">
            <li><a href="/">Home</a></li>
            <li>Apps</li>
            <li><a href="/publications">Projects & Publications</a></li>
            <li><a href="/about">About Me</a></li>
            <li className="active">Contact Me</li>
          </ul>
        </div>
      );
    default: // Other
      return (
        <div>
          <ul className="navigation">
            <li><a href="/">Home</a></li>
            <li>Apps</li>
            <li><a href="/publications">Projects & Publications</a></li>
            <li><a href="/about">About Me</a></li>
            <li><a href="/contact">Contact Me</a></li>
          </ul>
        </div>
      );
  }
}

NavBar.propTypes = {
  navTag: PropTypes.number,
}

NavBar.defaultProps = {
  navTag: 0,
}

export default NavBar;
