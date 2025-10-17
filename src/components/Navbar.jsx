import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import "./Navbar.css"; 

// Acepta la prop 'className' para estilos condicionales
export default function Navbar({ className }) { 
    const navigate = useNavigate();
    const [busqueda, setBusqueda] = useState(""); 

    const navegarARuta = (ruta) => {
        navigate(ruta);
    };

    const manejarSubmit = (e) => {
        e.preventDefault(); 
        if (busqueda.trim() !== "") {
            navigate(`/catalogo?search=${busqueda}`);
            setBusqueda("");
        }
    };
    
    // Combina la clase base 'header' con la clase recibida (ej: 'floating-navbar')
    const finalHeaderClass = `header ${className || ''}`.trim();

    return (
        <header className={finalHeaderClass}>
            <div className="header-main">
                <div className="container">
                    {/* Logo */}
                    <Link to="/" className="header-logo">
                        <h2>AUKA</h2>
                    </Link>

                    {/* Navegación Desktop */}
                    <nav className="desktop-navigation-menu">
                        <ul className="desktop-menu-category-list">
                            
                            {/* 1. INICIO */}
                            <li className="menu-category">
                                <Link to="/" className="menu-title"><span className="nav-text">Inicio</span></Link>
                            </li>

                            {/* 2. COSMETICA */}
                            <li className="menu-category">
                                <Link to="/cosmetica" className="menu-title">
                                    <span className="nav-text">Cosmetica</span>
                                </Link>
                            </li>

                            {/* 3. MEDICINAL.JSX */}
                            <li className="menu-category">
                                <Link to="/medicinal" className="menu-title">
                                    <span className="nav-text">Medicinal</span>
                                </Link>
                            </li>

                            {/* 4. BLOG.JSX */}
                            <li className="menu-category">
                                <Link to="/blog" className="menu-title">
                                    <span className="nav-text">Blog</span>
                                </Link>
                            </li>

                            {/* 5. SOBRENOSOTROS.JSX */}
                            <li className="menu-category">
                                <Link to="/sobrenosotros" className="menu-title">
                                    <span className="nav-text">Sobre Nosotros</span>
                                </Link>
                            </li>

                            {/* Formulario de búsqueda (si lo deseas) */}
                            <div className="header-search-container">
                                <form onSubmit={manejarSubmit}>
                                    <input
                                        type="text"
                                        className="search-field"
                                        placeholder="Buscar productos..."
                                        value={busqueda}
                                        onChange={(e) => setBusqueda(e.target.value)}
                                    />
                                    <button type="submit" className="search-btn">
                                        <i className="fas fa-search"></i>
                                    </button>
                                </form>
                            </div> */
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}