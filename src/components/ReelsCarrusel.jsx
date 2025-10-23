// src/components/ReelsCarrusel.jsx

import React, { useState } from 'react';
import './ReelsCarrusel.css'; // Asegúrate de crear este archivo CSS

// Datos de prueba (Reemplazar con datos reales de tu API de Instagram)
const reelsData = [
    { id: 1,  rating: 5, mediaUrl: "/ruta/a/video1.mp4", postUrl: "URL_INSTAGRAM_1" },
    { id: 2, rating: 4, mediaUrl: "/ruta/a/video2.mp4", postUrl: "URL_INSTAGRAM_2" },
    { id: 3, rating: 5, mediaUrl: "/ruta/a/video3.mp4", postUrl: "URL_INSTAGRAM_3" },
    { id: 4, rating: 5, mediaUrl: "/ruta/a/video4.mp4", postUrl: "URL_INSTAGRAM_4" },
    { id: 5, rating: 4, mediaUrl: "/ruta/a/video5.mp4", postUrl: "URL_INSTAGRAM_5" },
];

const ReelsCarrusel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        // Mueve al siguiente, o vuelve al inicio si llega al final
        setCurrentIndex((prevIndex) => 
            prevIndex === reelsData.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        // Mueve al anterior, o vuelve al final si llega al inicio
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? reelsData.length - 1 : prevIndex - 1
        );
    };

    // Función para renderizar las estrellas
    const renderStars = (rating) => {
        return Array(5).fill(0).map((_, i) => (
            <i 
                key={i} 
                className={`fa-star ${i < rating ? 'fas' : 'far'}`} 
            />
        ));
    };

    const currentReel = reelsData[currentIndex];

    return (
        <div className="reels-carousel-container">
            {/* Botón Anterior */}
            <button className="nav-arrow left" onClick={prevSlide}>
                <i className="fas fa-chevron-left"></i>
            </button>

            {/* Contenedor del Reel Visible */}
            <a 
                href={currentReel.postUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="reel-card-link"
            >
                <div 
                    className="reel-card" 
                    style={{ backgroundImage: `url(${currentReel.mediaUrl})` }}
                >
                    {/* Overlay y Play Icon */}
                    <div className="reel-overlay">
                        <i className="fas fa-play-circle play-icon"></i>
                    </div>

                    {/* Información y Estrellas */}
                    <div className="reel-info">
                        <p className="reel-author">{currentReel.author}</p>
                        <div className="reel-rating">
                            {renderStars(currentReel.rating)}
                        </div>
                    </div>
                </div>
            </a>
            
            {/* Botón Siguiente */}
            <button className="nav-arrow right" onClick={nextSlide}>
                <i className="fas fa-chevron-right"></i>
            </button>
        </div>
    );
};

export default ReelsCarrusel;