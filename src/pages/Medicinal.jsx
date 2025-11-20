import React, { useState } from 'react';
import './Medicinal.css'; 


const productosMedicinales = [
  {
    id: 1,
    nombre: 'Manzanilla Orgánica',
    precio: '12.50',
    imagen: 'https://mmpp.cl/wp-content/uploads/2024/11/Photoroom_20250612_184856.jpeg',
    badge: { texto: 'Nuevo', tipo: 'nuevo' }
  },
  {
    id: 2,
    nombre: 'Raíz de Valeriana',
    precio: '15.00',
    imagen: 'https://natutea.cl/wp-content/uploads/2023/04/VALERIANA-TERMINADO.jpg',
    badge: null
  },
  {
    id: 3,
    nombre: 'Menta Piperita',
    precio: '10.00',
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_828033-MLC83574114949_042025-O.webp',
    badge: { texto: 'En Oferta', tipo: 'oferta' }
  },
  {
    id: 4,
    nombre: 'Lavanda',
    precio: '14.00',
    imagen: 'https://www.australisherbolaria.com/cdn/shop/files/flores-de-lavanda-seca.jpg?v=1691516389',
    badge: null
  },
  {
    id: 5,
    nombre: 'Ginseng',
    precio: '22.00',
    imagen: 'https://fosetter.com/cdn/shop/files/1221692258882_.pic.jpg?v=1692410930&width=2048',
    badge: null
  },
  {
    id: 6,
    nombre: 'Jengibre',
    precio: '9.50',
    imagen: 'https://ecovalle.pe/wp-content/uploads/2022/08/JENGIBRE-70-GR.jpg',
    badge: null
  },
  {
    id: 7,
    nombre: 'Cúrcuma',
    precio: '11.50',
    imagen: 'https://shamix.cl/cdn/shop/products/012_700x700.png?v=1640811472',
    badge: null
  },
  {
    id: 8,
    nombre: 'Equinácea',
    precio: '18.00',
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_992397-MLA96185543655_102025-O.webp',
    badge: null
  },
];

export default function Medicinal() {
  const [filtroActivo, setFiltroActivo] = useState('Todo');

  return (
    <div>
      <main className="catalogo-medicinal">
        
        <div className="banner-container">
          <div className="banner-content">
            <img 
              src='https://healthhispanica.com/cdn/shop/collections/Single-Herb-Supplements-Banner_1200x400.jpg?v=1680946473' 
              className='banner-medicinal'
              alt='Banner Medicinal'
            />
          </div>
        </div>

        <nav className="filter-bar">
          <ul>
            <li><button onClick={() => setFiltroActivo('Todo')} className={filtroActivo === 'Todo' ? 'active' : ''}>Todo</button></li>
            <li><button onClick={() => setFiltroActivo('Relajantes')} className={filtroActivo === 'Relajantes' ? 'active' : ''}>Relajantes</button></li>
            <li><button onClick={() => setFiltroActivo('Energizantes')} className={filtroActivo === 'Energizantes' ? 'active' : ''}>Energizantes</button></li>
            <li><button onClick={() => setFiltroActivo('Digestión')} className={filtroActivo === 'Digestión' ? 'active' : ''}>Para la digestión</button></li>
            <li><button onClick={() => setFiltroActivo('Estrés')} className={filtroActivo === 'Estrés' ? 'active' : ''}>Para el estrés</button></li>
          </ul>
        </nav>

        {/* --- 2. GRID DE PRODUCTOS --- */}
        <div className="product-grid-medicinal">
          {productosMedicinales.map((producto) => (
            <div className="product-card" key={producto.id}>
              <div className="card-image-container">
                {producto.badge && (
                  <span className={`badge ${producto.badge.tipo}`}>
                    {producto.badge.texto}
                  </span>
                )}
                <img src={producto.imagen} alt={producto.nombre} />
              </div>

              <div className="card-body">
                <h3>{producto.nombre}</h3>
                <p className="price">${producto.precio}</p>
                <button className="add-to-cart-btn">
                  <i className="fas fa-shopping-cart"></i>
                  Lo quiero
                </button>
              </div>
            </div>
          ))}
        </div>

        <nav className="pagination-nav">
          <ul>
            <li><button aria-label="Página anterior"><i className="fas fa-chevron-left"></i></button></li>
            <li><button className="active">1</button></li>
            <li><button>2</button></li>
            <li><button>3</button></li>
            <li><span>...</span></li>
            <li><button>8</button></li>
            <li><button aria-label="Página siguiente"><i className="fas fa-chevron-right"></i></button></li>
          </ul>
        </nav>
      </main>
    </div>
  );
}
