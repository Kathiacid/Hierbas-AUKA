import React from 'react';
import Navbar from '../components/Navbar'; 
import "./Home.css"; // Estilos para la sección Hero
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            {/* SECCIÓN HERO: Contenedor con la imagen de fondo */}
            <div class="ofertas-barra">
                <div class="marquee-content">
                    <span>🛒 ¡Pregunta ya por la disponibilidad de tu producto favorito!</span>
                    <span>🔥 5% de descuento en compras sobre $30.000</span>
                    <span>🎉 Nuevos productos ya disponibles en Cosmetica.</span>
                    <span>🛒 ¡Pregunta ya por la disponibilidad de tu producto favorito!</span>
                    <span>🔥 5% de descuento en compras sobre $30.000</span>
                    <span>🎉 Nuevos productos ya disponibles en Cosmetica.</span>


                </div>
            </div>
            <div className="home-hero-section"> 
                {/* Navbar con la clase especial para el efecto flotante */}
                <Navbar className="floating-navbar" /> 
                
                {/* Contenido principal del banner */}
                <div className="hero-content">
                    <h1>Bienvenido a AUKA terapias</h1>
                    <p>Hierbas medicinales y cosmética natural para tu bienestar.</p>
                    <div className="button-group">
                        <button className="primary-button">Ver Cosmética</button>
                        <button className="secondary-button">Ver Medicinal</button>
                    </div>
                </div>
            </div>

            {/* Resto del contenido de la página Home */}
            <main className="home-content">
                <h1>Conoce nuestro productos</h1>
                <section className='tarjetas'>
                    <div className='tarjeta-categoria' id="tarjeta1">
                        <h2>Cosmetica</h2>
                        <p>Descricpion bla bla</p>
                        <Link>Ver más</Link>
                    </div>
                    <div className='tarjeta-categoria' id="tarjeta2">
                        <h2>Medicinal</h2>
                        <p>Descricpion bla bla</p>
                        <Link>Ver más</Link>
                    </div>
                    <div className='tarjeta-categoria' id="tarjeta3">
                        <h2>Masaje Terapéutico</h2>
                        <p>Descricpion bla bla</p>
                        <Link>Ver más</Link>
                    </div>
                </section>
            </main>
        </div>
    );
}