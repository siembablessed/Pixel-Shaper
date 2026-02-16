import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div className="header-container">
      <header className="header">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="Collin Manyande" className="logo" />
          </Link>
        </div>

        <nav className="nav-links">
          <Link to="/" className="nav-link active">Home</Link>
          <a href="/#about" className="nav-link">About</a>
          <a href="/#projects" className="nav-link">Projects</a>
        </nav>

        <div className="header-actions">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <button className="linkedin-btn">LinkedIn</button>
          </a>
          <button className="hire-me-btn">Hire Me</button>
        </div>
      </header>
    </div>
  );
};

export default Header;
