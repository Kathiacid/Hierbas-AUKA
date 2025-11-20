import React, { useState } from 'react';
import './DetalleProducto.css';

const PRODUCTO_DATA = {
id: 1,
nombre: "Manzanilla Orgánica",
categoria: "Flor seca para infusión",
precio: 12.50,
descripcion_corta: "Nuestra Manzanilla Orgánica es cuidadosamente cosechada a mano y secada de forma natural para preservar sus delicadas flores y potentes propiedades.",
descripcion_larga: "Conocida por sus efectos calmantes, es la infusión perfecta para relajarse después de un largo día, promover un sueño reparador y aliviar malestares digestivos leves.\n\nSu sabor es suave, floral y ligeramente dulce, con notas de manzana. Disfrútala sola o con una cucharadita de miel.",
beneficios: [
"Promueve la relajación y el sueño.",
"Ayuda a la digestión.",
"Propiedades anti-inflamatorias naturales.",
"100% Orgánico y libre de cafeína."
],
imagenes: [
"https://mmpp.cl/wp-content/uploads/2024/11/Photoroom_20250612_184856.jpeg", 
]
};

const DetalleProducto = () => {
const [imagenActiva, setImagenActiva] = useState(PRODUCTO_DATA.imagenes[0]);
const [cantidad, setCantidad] = useState(1);

const handleCantidad = (tipo) => {
if (tipo === 'menos' && cantidad > 1) setCantidad(cantidad - 1);
if (tipo === 'mas') setCantidad(cantidad + 1);
};

return (
<div className="detalle-wrapper">

    <nav className="breadcrumbs">
    <span>Inicio</span> / <span>Productos</span> / <span className="current">{PRODUCTO_DATA.nombre}</span>
    </nav>

    <div className="detalle-grid">

    <div className="gallery-section">
        <div className="main-image-container">
        <span className="badge-nuevo">Nuevo</span>
        <img src={imagenActiva} alt={PRODUCTO_DATA.nombre} className="main-image" />
        </div>
        
        <div className="thumbnails-row">
        {PRODUCTO_DATA.imagenes.map((img, index) => (
            <div 
            key={index} 
            className={`thumbnail ${imagenActiva === img ? 'active' : ''}`}
            onClick={() => setImagenActiva(img)}
            >
            <img src={img} alt={`vista-${index}`} />
            </div>
        ))}
        </div>
    </div>

    <div className="info-section">
        <h1 className="product-title">{PRODUCTO_DATA.nombre}</h1>
        <p className="product-subtitle">{PRODUCTO_DATA.categoria}</p>
        
        <div className="product-price">${PRODUCTO_DATA.precio.toFixed(2)}</div>

        <div className="product-description">
        <p>{PRODUCTO_DATA.descripcion_corta}</p>
        {PRODUCTO_DATA.descripcion_larga.split('\n\n').map((parrafo, i) => (
            <p key={i} style={{ marginTop: '15px' }}>{parrafo}</p>
        ))}
        </div>

        <div className="actions-container">
            <div className="quantity-control">
            <span className="qty-label">Cantidad:</span>
            <div className="qty-selector">
                <button onClick={() => handleCantidad('menos')}>&minus;</button>
                <span>{cantidad}</span>
                <button onClick={() => handleCantidad('mas')}>+</button>
            </div>
            </div>

            <button className="btn-add-cart">
            <i className="fa-solid fa-cart-shopping"></i> Lo quiero
            </button>
        </div>

        <hr className="divider" />

        <div className="benefits-section">
        <h3>Beneficios Clave:</h3>
        <ul>
            {PRODUCTO_DATA.beneficios.map((item, index) => (
            <li key={index}>{item}</li>
            ))}
        </ul>
        </div>

    </div>
    </div>
</div>
);
};

export default DetalleProducto;