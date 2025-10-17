import React from 'react';
import Navbar from '../components/Navbar'; 
import "./Home.css"; // Estilos para la sección Hero

export default function Home() {
    return (
        <div>
            {/* SECCIÓN HERO: Contenedor con la imagen de fondo */}
            <div className="home-hero-section"> 
                {/* Navbar con la clase especial para el efecto flotante */}
                <Navbar className="floating-navbar" /> 
                
                {/* Contenido principal del banner */}
                <div className="hero-content">
                    <h1>Descubre el Poder de la Naturaleza</h1>
                    <p>Hierbas medicinales y cosmética natural para tu bienestar.</p>
                    <div className="button-group">
                        <button className="primary-button">Ver Cosmética</button>
                        <button className="secondary-button">Ver Medicinal</button>
                    </div>
                </div>
            </div>

            {/* Resto del contenido de la página Home */}
            <main className="home-content">
                <h2>Secciones Destacadas</h2>
                <p>Aquí irán tus tarjetas de productos, testimonios, etc.</p>
            </main>
        </div>
    );
}