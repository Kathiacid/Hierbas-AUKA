import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'; // 


export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <Link to="/">
          🍃 <h2>AUKA</h2>
        </Link>
      </div>
      <nav className="navbar-links">
        <ul>
          <li>

            <NavLink to="/" end>Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/cosmetica">Cosmetica</NavLink>
          </li>
          <li>
            <NavLink to="/medicinal">Medicinal</NavLink>
          </li>
          <li>
            <NavLink to="/servicios">Servicios</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/sobrenosotros">Sobre Nosotros</NavLink>
          </li>
        </ul>
      </nav>
      <div className="navbar-right">
        
        <div className="navbar-search">
          <input type="text" placeholder="Buscar productos..." />
          <i className="fas fa-search"></i>
        </div>


      </div>
    </div>
  );
}