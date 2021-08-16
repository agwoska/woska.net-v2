import React from 'react';
import PropTypes from 'prop-types';
import './Nav.css';

const NavBar = (props) => {
  switch (props.navTag) {
    case 1: // Home
      return (
        <div>
          <ul className="navigation">
            <li className="active">Home</li>
            <li>Apps</li>
            <li>Notes</li>
            <li>About Me</li>
            <li>Contact Me</li>
          </ul>
        </div>
      );
    case 2: // Apps
      return (
        <div>
          <ul className="navigation">
            <li>Home</li>
            <li className="active">Apps</li>
            <li>Notes</li>
            <li>About Me</li>
            <li>Contact Me</li>
          </ul>
        </div>
      );
    case 3: // Notes
      return (
        <div>
          <ul className="navigation">
            <li>Home</li>
            <li>Apps</li>
            <li className="active">Notes</li>
            <li>About Me</li>
            <li>Contact Me</li>
          </ul>
        </div>
      );
    case 4: // About Me
      return (
        <div>
          <ul className="navigation">
            <li>Home</li>
            <li>Apps</li>
            <li>Notes</li>
            <li className="active">About Me</li>
            <li>Contact Me</li>
          </ul>
        </div>
      );
    case 5: // Contact Me
      return (
        <div>
          <ul className="navigation">
            <li>Home</li>
            <li>Apps</li>
            <li>Notes</li>
            <li>About Me</li>
            <li className="active">Contact Me</li>
          </ul>
        </div>
      );
    default: // Other
      return (
        <div>
          <ul className="navigation">
            <li>Home</li>
            <li>Apps</li>
            <li>Notes</li>
            <li>About Me</li>
            <li>Contact Me</li>
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
