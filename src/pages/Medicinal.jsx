import React, { useState } from 'react';
import './Medicinal.css'; // Un CSS nuevo para esta página

// --- Datos de Ejemplo (basados en tu imagen) ---
const productosMedicinales = [
  {
    id: 1,
    nombre: 'Manzanilla Orgánica',
    precio: '12.50',
    imagen: 'https://i.imgur.com/gPjYQZp.jpeg',
    badge: { texto: 'Nuevo', tipo: 'nuevo' }
  },
  {
    id: 2,
    nombre: 'Raíz de Valeriana',
    precio: '15.00',
    imagen: 'https://i.imgur.com/L1n7Y9q.png',
    badge: null
  },
  {
    id: 3,
    nombre: 'Menta Piperita',
    precio: '10.00',
    imagen: 'https://i.imgur.com/W2Cq4A3.jpeg',
    badge: { texto: 'En Oferta', tipo: 'oferta' }
  },
  {
    id: 4,
    nombre: 'Lavanda',
    precio: '14.00',
    imagen: 'https://i.imgur.com/T0bS1mB.jpeg',
    badge: null
  },
  {
    id: 5,
    nombre: 'Ginseng',
    precio: '22.00',
    imagen: 'https://i.imgur.com/rX8oY9f.jpeg',
    badge: null
  },
  {
    id: 6,
    nombre: 'Jengibre',
    precio: '9.50',
    imagen: 'https://i.imgur.com/7YfG9Y9.jpeg',
    badge: null
  },
  {
    id: 7,
    nombre: 'Cúrcuma',
    precio: '11.50',
    imagen: 'https://i.imgur.com/qO4Y4Yn.jpeg',
    badge: null
  },
  {
    id: 8,
    nombre: 'Equinácea',
    precio: '18.00',
    imagen: 'https://i.imgur.com/pYqO4G8.jpeg',
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
                  Añadir al Carrito
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* --- 3. PAGINACIÓN --- */}
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
