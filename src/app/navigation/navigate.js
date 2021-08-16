import React from 'react';
// import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import './navigate.css';

const NavBar = (props) => {
  switch (props.navTag) {
    case 1: // Home
      return (
        <div>
          <ul className="navigation homeNavigation">
            <li className="active">Home</li>
            <li>Apps</li>
            <li>Notes</li>
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
            <li>Notes</li>
            <li><a href="/about">About Me</a></li>
            <li><a href="/contact">Contact Me</a></li>
          </ul>
        </div>
      );
    case 3: // Notes
      return (
        <div>
          <ul className="navigation">
            <li><a href="/">Home</a></li>
            <li>Apps</li>
            <li className="active">Notes</li>
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
            <li>Notes</li>
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
            <li>Notes</li>
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
            <li>Notes</li>
            <li><a href="/about">About Me</a></li>
            <li><a href="/contact">Contact Me</a></li>
          </ul>
        </div>
      );
  }
}

NavBar.propTypes = {
  navTag: PropTypes.string,
}

NavBar.defaultProps = {
  navTag: 0,
}

export default NavBar;
