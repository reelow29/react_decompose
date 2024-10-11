import React from 'react';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="navigation">
      <a
        className="navigation__link"
        href="ProjectsMateReact/react_decompose/src#about"
      >
        About
      </a>
      <a
        className="navigation__link"
        href="ProjectsMateReact/react_decompose/src#services"
      >
        Services
      </a>
      <a
        className="navigation__link"
        href="ProjectsMateReact/react_decompose/src#contact"
      >
        Contact
      </a>
    </nav>
  );
}

export default Navigation;
