import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { productApi } from '../api'; // Importamos tu API real
import './DetalleProducto.css';      // Importamos tus estilos CSS

const DetalleProducto = () => {
  const { id } = useParams(); // Obtiene el ID directamente de la URL
  
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [cantidad, setCantidad] = useState(1);
  // Estado para la imagen activa (por si agregas galería en el futuro)
  const [imagenActiva, setImagenActiva] = useState('');

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        setLoading(true);
        // Llamada a tu API real usando el ID de la URL
        const data = await productApi.getById(id);
        setProducto(data);
        
        // Inicializamos la imagen activa
        if (data && data.img_prod) {
          setImagenActiva(data.img_prod);
        }
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("No pudimos cargar el producto.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProducto();
    }
  }, [id]);

  const handleCantidad = (tipo) => {
    if (tipo === 'menos' && cantidad > 1) setCantidad(cantidad - 1);
    if (tipo === 'mas') setCantidad(cantidad + 1);
  };

  if (loading) return <div className="loading-msg">Cargando detalles...</div>;
  if (error || !producto) return <div className="loading-msg">{error || "Producto no encontrado"}</div>;

  // Lógica para procesar beneficios (lista o string)
  const listaBeneficios = producto.beneficio_prod && producto.beneficio_prod.includes(',') 
      ? producto.beneficio_prod.split(',').map(b => b.trim())
      : [producto.beneficio_prod];

  // Lógica para procesar categorías
  const categoriaTexto = producto.categorias && producto.categorias.length > 0 
      ? producto.categorias.map(c => c.nombre_cat).join(' / ')
      : producto.tipo;

  return (
    <div className="detalle-wrapper">
      <nav className="breadcrumbs">
        <Link to="/">Inicio</Link> / <Link to="/productos">Productos</Link> / <span className="current">{producto.nombre_prod}</span>
      </nav>

      <div className="detalle-grid">

        {/* --- COLUMNA IMAGENES --- */}
        <div className="gallery-section">
          <div className="main-image-container">
            {/* Etiquetas dinámicas */}
            <span className="badge-nuevo">{producto.tipo}</span>
            {!producto.stock && <span className="badge-agotado">Agotado</span>}
            
            <img 
              src={producto.img_prod} 
              alt={producto.nombre_prod} 
              className="main-image"
              onError={(e) => { 
                e.target.onerror = null; 
                e.target.src = 'https://via.placeholder.com/600?text=Sin+Imagen'; 
              }}
            />
          </div>
          
          <div className="thumbnails-row">
             <div className="thumbnail active">
               <img src={producto.img_prod} alt="vista-principal" />
             </div>
             {/* Aquí podrías agregar más miniaturas si tu backend soportara galería */}
          </div>
        </div>

        {/* --- COLUMNA INFO --- */}
        <div className="info-section">
          <h1 className="product-title">{producto.nombre_prod}</h1>
          <p className="product-subtitle">{categoriaTexto}</p>
          
          <div className="product-price">
            ${Number(producto.precio_prod).toLocaleString('es-CL')}
          </div>

          <div className="product-description">
            <p>{producto.descripcion_prod}</p>
          </div>

          <div className="actions-container">
            {/* Selector de Cantidad (Solo si hay stock) */}
            {producto.stock && (
              <div className="quantity-control">
                <span className="qty-label">Cantidad:</span>
                <div className="qty-selector">
                  <button onClick={() => handleCantidad('menos')}>&minus;</button>
                  <span>{cantidad}</span>
                  <button onClick={() => handleCantidad('mas')}>+</button>
                </div>
              </div>
            )}

            <button 
              className="btn-add-cart" 
              disabled={!producto.stock}
            >
              {producto.stock ? (
                 <>
                   <i className="fas fa-shopping-cart"></i> Agregar al Carrito
                 </>
              ) : (
                 'Sin Stock'
              )}
            </button>
          </div>

          <hr className="divider" />

          {/* Sección de Beneficios Dinámica */}
          {listaBeneficios.length > 0 && listaBeneficios[0] && (
            <div className="benefits-section">
              <h3>Beneficios Clave:</h3>
              <ul>
                {listaBeneficios.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default DetalleProducto;