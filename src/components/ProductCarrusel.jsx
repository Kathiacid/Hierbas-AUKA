import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { productApi } from '../api'; 
import { useCart } from '../components/CartContext'; 
import './ProductCarrusel.css';

const ProductCarousel = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const { addToCart, cartItems } = useCart(); 

    useEffect(() => {
        const fetchDestacados = async () => {
            try {
                const data = await productApi.getFeatured();
                const listaRaw = Array.isArray(data) ? data : (data.results || []);

                const productosAdaptados = listaRaw.map(item => {
                    const p = item.producto || item; 
                    const precioOriginal = parseFloat(p.precio_prod);
                    const precioFinal = p.precio_actual ? parseFloat(p.precio_actual) : precioOriginal;
                    const esOferta = precioFinal < precioOriginal;

                    return {
                        id: p.id,
                        nombre: p.nombre_prod || "Producto sin nombre",
                        imagen: p.img_prod || "https://via.placeholder.com/300?text=Sin+Imagen",
                        descripcion: p.beneficio_prod || p.descripcion_prod || "Sin descripción",
                        precio: precioFinal,
                        old_price: esOferta ? precioOriginal : null,
                        stock: p.stock ?? true,
                        offer: esOferta
                    };
                });

                setProducts(productosAdaptados.filter(p => p.id));
            } catch (error) {
                console.error("Error cargando destacados:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchDestacados();
    }, []);

    if (loading) return <div style={{padding:'50px', textAlign:'center'}}>Cargando destacados...</div>;
    if (products.length === 0) return null;

    return (
        <div className="product-carousel-container">
            <div className="carousel-header">
                <h2>Productos Destacados 🍃</h2>
                <h3 className="subtitle">Nuestras mejores selecciones y ofertas exclusivas de la semana.</h3>
            </div>

            <div className="product-carousel">
                <div className="product-carousel-inner">
                    {products.map(product => {
                        const yaEnCarrito = cartItems.some(item => item.id === product.id);

                        return (
                            <div key={product.id} className="product-card">
                                {product.offer && <div className="offer-tag">OFERTA</div>}

                                <div className="product-image-container">
                                    <img
                                        src={product.imagen}
                                        alt={product.nombre}
                                        className="product-image"
                                        onError={(e) => e.target.src = 'https://via.placeholder.com/300'}
                                    />
                                </div>

                                <div className="product-info">
                                    <div>
                                        <h3 className="product-name">
                                            <Link to={`/producto/${product.id}`}>
                                                {product.nombre}
                                            </Link>
                                        </h3>
                                        <p className="product-description">
                                            {product.descripcion}
                                        </p>
                                    </div>

                                    <div>
                                        <div className="prices">
                                            <p className="product-price">
                                                ${product.precio.toLocaleString('es-CL')}
                                            </p>
                                            {product.old_price && (
                                                <p className="old-price">
                                                    ${product.old_price.toLocaleString('es-CL')}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <button 
                                        className="add-to-cart-btn"
                                        disabled={!product.stock || yaEnCarrito}
                                        onClick={() => addToCart({
                                            id: product.id,
                                            nombre_prod: product.nombre,
                                            img_prod: product.imagen,
                                            precio_prod: product.precio,
                                            stock: product.stock,
                                            tipo: 'Destacado'
                                        })}
                                    >
                                        <i className={yaEnCarrito ? "fas fa-check" : "fa-solid fa-cart-shopping"}></i>
                                        { !product.stock ? ' Sin Stock' : yaEnCarrito ? ' Agregado' : ' Añadir al Carrito' }
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProductCarousel;