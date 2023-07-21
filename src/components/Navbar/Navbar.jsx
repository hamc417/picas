import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(true);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className={`navbar ${isNavOpen ? 'open' : ''}`}>
      <div className="logo">PICAS</div>
      <button className="nav-toggle" onClick={handleNavToggle}>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
      </button>

      {isNavOpen && (
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">Nosotros</Link>
          </li>
          <li className="nav-item">
            <Link to="/contacts">Contacto</Link>
          </li>
          <li className="nav-item">
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default NavBar;
