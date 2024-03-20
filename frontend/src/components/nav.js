import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css'; 

const Nav = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Richard Jordan Wilson 
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/academic-work" className="nav-link">
            Academic Work
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/professional-work" className="nav-link">
            Professional Work
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
