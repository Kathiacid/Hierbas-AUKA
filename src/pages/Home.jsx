

import React from 'react';
import Navbar from '../components/Navbar'; 
import "./Home.css"; 
import { Link } from 'react-router-dom';
import ProductCarrusel from '../components/ProductCarrusel';
import ReelsCarrusel from '../components/ReelsCarrusel'; // Componente del carrusel de videos

export default function Home() {
    return (
        <div>
            {/* 1. BARRA DE OFERTAS (MARQUEE) */}
            <div className="ofertas-barra">
                <div className="marquee-content">
                    {/* Contenido duplicado para un loop continuo */}
                    <span>🛒 ¡Pregunta ya por la disponibilidad de tu producto favorito!</span>
                    <span>🔥 5% de descuento en compras sobre $30.000</span>
                    <span>🎉 Nuevos productos ya disponibles en Cosmetica.</span>
                    <span>🛒 ¡Pregunta ya por la disponibilidad de tu producto favorito!</span>
                    <span>🔥 5% de descuento en compras sobre $30.000</span>
                    <span>🎉 Nuevos productos ya disponibles en Cosmetica.</span>
                </div>
            </div>
            
            {/* 2. SECCIÓN HERO (BANNER PRINCIPAL) */}
            <div className="home-hero-section"> 
                <Navbar className="floating-navbar" /> 
                
                <div className="hero-content">
                    <h1>Bienvenido a AUKA terapias</h1>
                    <p>Hierbas medicinales y cosmética natural para tu bienestar.</p>
                    <div className="button-group">
                        <button className="primary-button">Ver Cosmética</button>
                        <button className="secondary-button">Ver Medicinal</button>
                    </div>
                </div>
            </div>

            {/* 3. CONTENIDO PRINCIPAL (MAIN) */}
            <section className="home-content">
                
                <h1>Conoce nuestros productos</h1>
                
                {/* 3.1. SECCIÓN DE TARJETAS DE CATEGORÍAS */}
                <section className='tarjetas'>
                    <div className='tarjeta-categoria' id="tarjeta1">
                        <h2>Cosmetica</h2>
                        <p>Descricpion bla bla</p>
                        <Link to="/catalogo-completo?categoria=cosmetica">Ver más</Link>
                    </div>
                    <div className='tarjeta-categoria' id="tarjeta2">
                        <h2>Medicinal</h2>
                        <p>Descricpion bla bla</p>
                        <Link to="/catalogo-completo?categoria=medicinal">Ver más</Link>
                    </div>
                    <div className='tarjeta-categoria' id="tarjeta3">
                        <h2>Masaje Terapéutico</h2>
                        <p>Descricpion bla bla</p>
                        <Link to="/catalogo-completo?categoria=masajes">Ver más</Link>
                    </div> 
                </section>
                
            </section>
            <section className='section2'>
                
                <div className='instagram'>

                    <div className="instagram-profile-block">
                        <a 
                            href="https://www.instagram.com/auka_terapias/?hl=es" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="instagram-button"
                        >
                            Síguenos en Instagram
                        </a>

                    </div>

                    <div className="reels-mover"> 
                        <ReelsCarrusel />
                    </div>
                </div>
                <div className='blog'>
                    <h2>Blog</h2>
                    <p>Explora nuestros últimos posts, consejos sobre bienestar, las propiedades de la cosmética natural y las hierbas medicinales.</p>
                    <Link to="/blog">Ver todo</Link>
                    
                    <div className='grid-blog'>
                        <div className='tarjeta-blog'><img src="/ruta/imagen-blog-1.jpg" alt="Post de blog 1" /><p>Descricpion bla bla</p><Link to="/blog/post1">Ver más</Link></div>
                        <div className='tarjeta-blog'><img src="/ruta/imagen-blog-2.jpg" alt="Post de blog 2" /><p>Descricpion bla bla</p><Link to="/blog/post2">Ver más</Link></div>
                        <div className='tarjeta-blog'><img src="/ruta/imagen-blog-3.jpg" alt="Post de blog 3" /><p>Descricpion bla bla</p><Link to="/blog/post3">Ver más</Link></div>
                        <div className='tarjeta-blog'><img src="/ruta/imagen-blog-4.jpg" alt="Post de blog 4" /><p>Descricpion bla bla</p><Link to="/blog/post4">Ver más</Link></div>
                    </div>
                </div>
            </section>
                
                
            <section className='destacados'>
                <div className="carousel-destacados">
                    <h2 className="title">Productos Destacados</h2>
                    <ProductCarrusel/>
                </div>
            </section>
        </div>
    );
}