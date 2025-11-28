import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { productApi } from '../api';
import { useCart } from '../components/CartContext';
import './Busqueda.css';

export default function Busqueda() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart, cartItems } = useCart();

  useEffect(() => {
    const realizarBusqueda = async () => {
        setLoading(true);
        if (query) {
            const data = await productApi.searchProducts(query);
            const resultados = Array.isArray(data) ? data : (data.results || []);
            setProductos(resultados);
        }
        setLoading(false);
    };
    realizarBusqueda();
  }, [query]); 

  if (loading) return <div style={{textAlign:'center', padding:'50px'}}>Buscando "{query}"...</div>;

  return (
    <div className="catalogo-medicinal">
        <div style={{textAlign:'center', margin:'30px 0'}}>
            <h2>Resultados de búsqueda: "{query}"</h2>
            <p>{productos.length} productos encontrados</p>
        </div>

        <div className="product-grid-medicinal">
            {productos.length > 0 ? (
                productos.map((producto) => {
                    const yaEnCarrito = cartItems.some(item => item.id === producto.id);
                    return (
                        <div className="product-card" key={producto.id}>
                            <div className="card-image-container">
                                <img 
                                    src={producto.img_prod} 
                                    alt={producto.nombre_prod} 
                                    className="card-image-fit"
                                    onError={(e) => e.target.src = 'https://via.placeholder.com/300'}
                                />
                            </div>
                            <div className="card-body">
                                <h3>
                                    <Link to={`/producto/${producto.id}`} style={{color:'inherit', textDecoration:'none'}}>
                                        {producto.nombre_prod}
                                    </Link>
                                </h3>
                                <p className="beneficios">{producto.beneficio_prod}</p>
                                <p className="price">${Number(producto.precio_prod).toLocaleString('es-CL')}</p>
                                
                                <button 
                                    className="add-to-cart-btn"
                                    disabled={!producto.stock || yaEnCarrito}
                                    onClick={() => addToCart(producto)}
                                >
                                    <i className={yaEnCarrito ? "fas fa-check" : "fas fa-shopping-cart"}></i>
                                    {!producto.stock ? ' Sin Stock' : yaEnCarrito ? ' Agregado' : ' Lo quiero'}
                                </button>
                            </div>
                        </div>
                    );
                })
            ) : (
                <div style={{width:'100%', textAlign:'center'}}>
                    <h3>No encontramos productos que coincidan con tu búsqueda.</h3>
                    <Link to="/" style={{color:'#4CA54C'}}>Volver al inicio</Link>
                </div>
            )}
        </div>
    </div>
    );
}