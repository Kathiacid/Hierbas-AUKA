import React, { useState } from 'react';
import './Cosmetica.css'; // Un CSS nuevo para esta página

// --- Datos de Ejemplo (basados en tu imagen) ---
const productosMedicinales = [
  {
    id: 1,
    nombre: 'Manzanilla Orgánica',
    precio: '12.50',
    imagen: 'https://www.conasi.eu/blog/wp-content/uploads/2021/07/aceite-oliva-piel-121.jpg', // URL de ejemplo, reemplaza
    badge: { texto: 'Nuevo', tipo: 'nuevo' }
  },
  {
    id: 2,
    nombre: 'Raíz de Valeriana',
    precio: '15.00',
    imagen: 'https://i.imgur.com/L1n7Y9q.png', // URL de ejemplo, reemplaza
    badge: null
  },
  {
    id: 3,
    nombre: 'Menta Piperita',
    precio: '10.00',
    imagen: 'https://i.imgur.com/W2Cq4A3.jpeg', // URL de ejemplo, reemplaza
    badge: { texto: 'En Oferta', tipo: 'oferta' }
  },
  {
    id: 4,
    nombre: 'Lavanda',
    precio: '14.00',
    imagen: 'https://i.imgur.com/T0bS1mB.jpeg', // URL de ejemplo, reemplaza
    badge: null
  },
  {
    id: 5,
    nombre: 'Ginseng',
    precio: '22.00',
    imagen: 'https://i.imgur.com/rX8oY9f.jpeg', // URL de ejemplo, reemplaza
    badge: null
  },
  {
    id: 6,
    nombre: 'Jengibre',
    precio: '9.50',
    imagen: 'https://i.imgur.com/7YfG9Y9.jpeg', // URL de ejemplo, reemplaza
    badge: null
  },
  {
    id: 7,
    nombre: 'Cúrcuma',
    precio: '11.50',
    imagen: 'https://i.imgur.com/qO4Y4Yn.jpeg', // URL de ejemplo, reemplaza
    badge: null
  },
  {
    id: 8,
    nombre: 'Equinácea',
    precio: '18.00',
    imagen: 'https://i.imgur.com/pYqO4G8.jpeg', // URL de ejemplo, reemplaza
    badge: null
  },
  // ... puedes añadir más productos aquí
];

export default function Medicinal() {
  const [filtroActivo, setFiltroActivo] = useState('Todo');

  return (
    <div>
      <main className="catalogo-medicinal">
        
        <div className="banner-container">
      <div className="banner-content">
        <img src='https://sinsinsin-ecotienda.com/wp-content/uploads/2023/07/banner-cosmetica-natural-Tienda-NaturaLi.jpg' className='banner-cosmetica'/>
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
                  {/* (Asegúrate de tener Font Awesome) */}
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