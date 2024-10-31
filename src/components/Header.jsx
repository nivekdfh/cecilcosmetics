import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
  <div>
    <div className="nav_top">
    <p>Website under construction!</p>
  </div>
    <header className="header">

      <div className="nav_logo">
        <Link className="nav_logo1" to="/"><img className="grid-item logo" src="images/gill-FINALC.png" alt="Me" /></Link>
      </div>
      {/* Navigation Links */}
      <nav className={`nav_links ${isNavOpen ? 'hidden' : ''}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/treatments">Treatments</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        </nav>
        <nav className={`nav_links ${isNavOpen ? 'hidden' : ''}`}>
        <Link to="/booknow" className="nav-link">
          <button className="contact-button">Book now</button>
        </Link>
      </nav>

      {/* Hamburger Menu Button */}
      <button className="hamburger-menu" onClick={toggleNav}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
      {/* Overlay Menu */}
      <div className={`overlay ${isNavOpen ? 'open' : ''}`}>
        <a href="#" className="closebtn" onClick={toggleNav} aria-label="Close Menu">&times;</a>
        <div className="overlay-content">
          <Link to="/" className="nav-link" onClick={toggleNav}>Home</Link>
          <Link to="/treatments" className="nav-link" onClick={toggleNav}>Treatments</Link>
          <Link to="/about" className="nav-link" onClick={toggleNav}>About</Link>
          <Link to="/contact" className="nav-link" onClick={toggleNav}>Contact</Link>
          <Link to="/booknow" className="nav-link" onClick={toggleNav}>
            <buttonnav className="contact-button">Book now</buttonnav>
          </Link>
        </div>
      </div>
    </header>
  </div>
  );
}

export default Header;
