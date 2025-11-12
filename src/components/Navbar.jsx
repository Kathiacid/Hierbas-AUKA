import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'; // 

export default function Navbar() {
  return (
    <header className="navbar-container">
      
      {/* 1. Logo (Izquierda) */}
      <div className="navbar-logo">
        <Link to="/">
          🍃 <h2>AUKA</h2>
        </Link>
      </div>

      {/* 2. Links de Navegación (Centro) */}
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

      {/* 3. Búsqueda y Carrito (Derecha) */}
      <div className="navbar-right">
        
        {/* Barra de Búsqueda */}
        <div className="navbar-search">
          <input type="text" placeholder="Buscar productos..." />
          {/* Asegúrate de tener Font Awesome */}
          <i className="fas fa-search"></i>
        </div>


      </div>
    </header>
  );
}