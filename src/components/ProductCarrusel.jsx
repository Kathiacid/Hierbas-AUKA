import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProductCarrusel.css';

// 🛑 DATOS DE PRUEBA (DUMMY DATA) - Incluyen todos los campos del diseño
const DUMMY_PRODUCTS = [
    { 
        id: 1, 
        producto_nombre: "Infusión de Menta", 
        producto: 1, 
        producto_precio: 12500, 
        old_price: 15000, 
        producto_imagen: "https://images.unsplash.com/photo-1543353071-88f5f458632e?q=80&w=1770&auto=format&fit=crop",
        producto_descripcion: "Té orgánico de menta, perfecto para la digestión y la relajación.",
        rating: 4, offer: true, rating_count: 12
    },
    { 
        id: 2, 
        producto_nombre: "Crema de Caléndula", 
        producto: 2, 
        producto_precio: 18000, 
        old_price: null, 
        producto_imagen: "https://images.unsplash.com/photo-1580226291662-df8d9333a3b3?q=80&w=1770&auto=format&fit=crop",
        producto_descripcion: "Crema hidratante natural ideal para pieles sensibles y secas.",
        rating: 5, offer: false, rating_count: 25
    },
    { 
        id: 3, 
        producto_nombre: "Aceite de Jojoba", 
        producto: 3, 
        producto_precio: 9500, 
        old_price: 11000, 
        producto_imagen: "https://images.unsplash.com/photo-1627885444654-e0af0f19c0f9?q=80&w=1770&auto=format&fit=crop",
        producto_descripcion: "Aceite puro de jojoba, excelente para el cabello y el cuerpo.",
        rating: 4, offer: true, rating_count: 8
    },
    { 
        id: 4, 
        producto_nombre: "Jabón de Carbón Activado", 
        producto: 4, 
        producto_precio: 7200, 
        old_price: null, 
        producto_imagen: "https://images.unsplash.com/photo-1556911220-4e44f0b2f153?q=80&w=1770&auto=format&fit=crop",
        producto_descripcion: "Jabón desintoxicante profundo, especial para pieles grasas.",
        rating: 5, offer: false, rating_count: 40
    },
    { 
        id: 5, 
        producto_nombre: "Kit Masaje Piedras", 
        producto: 5, 
        producto_precio: 45000, 
        old_price: 50000, 
        producto_imagen: "https://images.unsplash.com/photo-1557022130-9080b4356e6d?q=80&w=1770&auto=format&fit=crop",
        producto_descripcion: "Kit completo de piedras volcánicas para terapia de calor.",
        rating: 3, offer: true, rating_count: 15
    },
];

const ProductCarousel = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(DUMMY_PRODUCTS); 
    }, []);

    // Función para renderizar las estrellas
    const renderStars = (rating) => {
        return Array(5).fill(0).map((_, i) => (
            <i key={i} className={`fa-star ${i < rating ? 'fas' : 'far'}`} />
        ));
    };

    return (
        <div className="product-carousel-container">
            {/* Títulos y Header (carousel-header) */}
            <div className="carousel-header">
                <h2>Productos Destacados <span className="top-icon"><i className="fas fa-certificate"></i></span></h2>
                <p className="subtitle">Nuestras mejores selecciones y ofertas exclusivas de la semana.</p>
                <Link to="/catalogo" className="view-more-link">Ver Catálogo Completo</Link>
            </div>
            
            <div className="product-carousel">
                <div className="product-carousel-inner">
                    {products.map(product => (
                        <div key={product.id} className="product-card">
                            
                            {/* Etiqueta de Oferta */}
                            {product.offer && <div className="offer-tag">OFERTA</div>}

                            <div className="product-image-container">
                                <img
                                    src={product.producto_imagen}
                                    alt={product.producto_nombre}
                                    className="product-image"
                                />
                            </div>
                            
                            <div className="product-info">
                                
                                {/* Contenido Superior: Nombre y Descripción */}
                                <div>
                                    <h3 className="product-name">
                                        <Link to={`/producto/${product.producto}`}>{product.producto_nombre}</Link>
                                    </h3>
                                    
                                    <p className="product-description">
                                        {product.producto_descripcion || "Descripción no disponible"}
                                    </p>
                                </div>
                                
                                {/* Contenido Inferior: Rating, Precio y Botón */}
                                <div>
                                    
                                    {/* Calificación de Estrellas */}
                                    <div className="rating">
                                        {renderStars(product.rating)}
                                        <span className="rating-count">({product.rating}.0)</span>
                                    </div>
                                    
                                    {/* Precio y Descuento */}
                                    <div className="prices">
                                        <p className="product-price">
                                            ${parseFloat(product.producto_precio).toLocaleString('es-CL')}
                                        </p>
                                        {product.old_price && (
                                            <p className="old-price">
                                                ${parseFloat(product.old_price).toLocaleString('es-CL')}
                                            </p>
                                        )}
                                    </div>

                                </div>
                                
                                {/* Botón "Añadir al carrito" */}
                                <Link to={`/producto/${product.producto}`} className="add-to-cart-btn">
                                    Añadir al carrito
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    );
};

export default ProductCarousel;