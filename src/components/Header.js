import React from "react";
import Proptypes from "prop-types";

// function Header() {}

//Arrow function
const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
      </div>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
      </ul>
    </nav>
  );
};

// Deafult when no props is defined
Header.defaultProps = {
  branding: "My App"
};

//Proptypes
Header.propTypes = {
  branding: Proptypes.string.isRequired
};

export default Header;
