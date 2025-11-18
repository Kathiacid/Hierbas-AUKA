import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProductCarrusel.css';

const DUMMY_PRODUCTS = [
    { 
        id: 1, 
        producto_nombre: "Infusión de Menta", 
        producto: 1, 
        producto_precio: 12500, 
        old_price: 15000, 
        producto_imagen: "https://m.media-amazon.com/images/I/91nXhP8FrCL.jpg",
        producto_descripcion: "Té orgánico de menta, perfecto para la digestión y la relajación.",
        rating: 4, offer: true, rating_count: 12
    },
    { 
        id: 2, 
        producto_nombre: "Crema de Caléndula", 
        producto: 2, 
        producto_precio: 18000, 
        old_price: null, 
        producto_imagen: "https://i0.wp.com/www.rinconsilvestre.net/wp-content/uploads/2019/11/foto2_c.ca_-scaled.jpg?fit=2560%2C1920&ssl=1",
        producto_descripcion: "Crema hidratante natural ideal para pieles sensibles y secas.",
        rating: 5, offer: false, rating_count: 25
    },
    { 
        id: 3, 
        producto_nombre: "Aceite de Jojoba", 
        producto: 3, 
        producto_precio: 9500, 
        old_price: 11000, 
        producto_imagen: "https://almayun.cl/cdn/shop/products/backgrounderaser_1651957599.jpg?v=1664723053&width=1214",
        producto_descripcion: "Aceite puro de jojoba, excelente para el cabello y el cuerpo.",
        rating: 4, offer: true, rating_count: 8
    },
    { 
        id: 4, 
        producto_nombre: "Jabón de Carbón Activado", 
        producto: 4, 
        producto_precio: 7200, 
        old_price: null, 
        producto_imagen: "https://http2.mlstatic.com/D_NQ_NP_714698-MLC85865214116_062025-O-jabon-de-carbon-activado-para-limpieza-de-la-piel-1unid.webp",
        producto_descripcion: "Jabón desintoxicante profundo, especial para pieles grasas.",
        rating: 5, offer: false, rating_count: 40
    },
    { 
        id: 5, 
        producto_nombre: "Kit Masaje Piedras", 
        producto: 5, 
        producto_precio: 45000, 
        old_price: 50000, 
        producto_imagen: "https://lacasadelmasajista.com/server/Portal_0000410_0036316/img/products/set-60-piedras-calientes-de-basalto_26723.jpg",
        producto_descripcion: "Kit completo de piedras volcánicas para terapia de calor.",
        rating: 3, offer: true, rating_count: 15
    },
];

const ProductCarousel = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(DUMMY_PRODUCTS); 
    }, []);

    return (
        <div className="product-carousel-container">
            {/* Títulos y Header (carousel-header) */}
            <div className="carousel-header">
                <h2>Productos Destacados </h2>
                <h3 className="subtitle">Nuestras mejores selecciones y ofertas exclusivas de la semana.</h3>
                
            </div>
            
            <div className="product-carousel">
                <div className="product-carousel-inner">
                    {products.map(product => (
                        <div key={product.id} className="product-card">

                            {/* Etiqueta de Oferta (si aplica) */}
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
                                    
                                    {/* Descripción activada */}
                                    <p className="product-description">
                                        {product.producto_descripcion || "Descripción no disponible"}
                                    </p>
                                </div>

                                <div>
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

                                {/* Botón "Añadir al carrito" con el ícono de Font Awesome */}
                                <Link to={`/producto/${product.producto}`} className="add-to-cart-btn">
                                    <i className="fa-solid fa-cart-shopping"></i> Añadir al Carrito
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